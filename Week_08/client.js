const net = require("net");
const parser = require("./parser");
const images = require("images");

function render(viewport, element) {
    if (element.style) {
        let img = images(element.style.width, element.style.height);

        if (element.style["background-color"]) {
            let color = element.style["background-color"] || "rgb(0,0,0)";
            color.match(/rgb\((\d+),(\d+),(\d+)\)/);
            img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3));
            viewport.draw(img, element.style.left || 0, element.style.top || 0);
        }
    }

    if (element.children) {
        for (let child of children) {
            render(viewport, child);
        }
    }
}

class Request {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if (this.headers["Content-Type"] === "application/json") {
            this.bodyText = JSON.stringify(this.body);
        } else if (this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join("&");
        }

        this.headers["Content-Length"] = this.bodyText.length;
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            let parser = new ResponseParser();
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port,
                }, () => {
                    connection.write(this.toString());
                })
            }

            connection.on("data", data => {
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            })

            connection.on("error", err => {
                reject(err);
                connection.end();
            })
        })
    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join("\r\n")}\r
\r
${this.bodyText}`
    }

}

class ResponseParser {
    constructor() {
        this.WAITING_STATUS_LINE = 0;
        this.WAITING_STATUS_LINE_END = 1;
        this.WAITING_HEADER_NAME = 2;
        this.WAITING_HEADER_SPACE = 3;
        this.WAITING_HEADER_VALUE = 4;
        this.WAITING_HEADER_LINE_END = 5;
        this.WAITING_HEADER_BLOCK_END = 6;
        this.WAITING_BODY = 7;

        this.currect = this.WAITING_STATUS_LINE;
        this.statusLine = '';
        this.headers = {};
        this.headerName = "";
        this.headerValue = "";
        this.bodyParser = null;
    }

    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }

    get isFinished() {
        return this.bodyParser && this.bodyParser.isFinished;
    }

    get response() {
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
        return {
            statusCode: RegExp.$1,
            statusText: RegExp.$2,
            headers: this.headers,
            body: this.bodyParser.content.join(''),
        }
    }

    receiveChar(char) {
        if (this.currect === this.WAITING_STATUS_LINE) {
            if (char === '\r') {
                this.currect = this.WAITING_STATUS_LINE_END;
            } else {
                this.statusLine += char;
            }
        } else if (this.currect === this.WAITING_STATUS_LINE_END) {
            if (char === '\n') {
                this.currect = this.WAITING_HEADER_NAME;

            }
        } else if (this.currect === this.WAITING_HEADER_NAME) {
            if (char === ':') {
                this.currect = this.WAITING_HEADER_SPACE;
            } else if (char === '\r') {
                this.currect = this.WAITING_HEADER_BLOCK_END;
                if (this.headers['Transfer-Encoding'] === 'chunked') {
                    this.bodyParser = new TrunkedBodyParser();
                }
            } else {
                this.headerName += char;
            }
        } else if (this.currect === this.WAITING_HEADER_SPACE) {
            if (char === ' ') {
                this.currect = this.WAITING_HEADER_VALUE;
            }
        } else if (this.currect === this.WAITING_HEADER_VALUE) {
            if (char === '\r') {
                this.currect = this.WAITING_HEADER_LINE_END;
                this.headers[this.headerName] = this.headerValue;
                this.headerValue = '';
                this.headerName = '';
            } else {
                this.headerValue += char;
            }
        } else if (this.currect === this.WAITING_HEADER_LINE_END) {
            if (char === '\n') {
                this.currect = this.WAITING_HEADER_NAME;
            }
        } else if (this.currect === this.WAITING_HEADER_BLOCK_END) {
            if (char === '\n') {
                this.currect = this.WAITING_BODY;
            }
        } else if (this.currect === this.WAITING_BODY) {
            this.bodyParser.receiveChar(char)
        }
    }
}

class TrunkedBodyParser {
    constructor() {
        this.WAITING_LENGTH = 0;
        this.WAITING_LENGTH_LINE_END = 1;
        this.READING_TRUNK = 2;
        this.WAITING_NEW_LINE = 3;
        this.WAITING_NEW_LINE_END = 4;
        this.length = 0;
        this.content = [];
        this.isFinished = false;
        this.currect = this.WAITING_LENGTH;
    }

    receiveChar(char) {
        if (this.currect === this.WAITING_LENGTH) {
            if (char === '\r') {
                if (this.length === 0) {
                    this.isFinished = true;
                }
                this.currect = this.WAITING_LENGTH_LINE_END;
            } else {
                this.length *= 16;
                this.length += parseInt(char, 16);
            }
        } else if (this.currect === this.WAITING_LENGTH_LINE_END) {
            if (char === '\n') {
                this.currect = this.READING_TRUNK;
            }
        } else if (this.currect === this.READING_TRUNK) {
            this.content.push(char);
            this.length--;
            if (this.length === 0) {
                this.currect = this.WAITING_NEW_LINE;
            }
        } else if (this.currect === this.WAITING_NEW_LINE) {
            if (char === '\r') {
                this.currect = this.WAITING_NEW_LINE_END;
            }
        } else if (this.currect === this.WAITING_NEW_LINE_END) {
            if (char === '\n') {
                this.currect = this.WAITING_LENGTH;
            }
        }
    }
}


void async function () {
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8088",
        path: "/",
        headers: {
            ["X-Foo2"]: "customed",
        },
        body: {
            name: "corazon"
        }
    })

    let response = await request.send();
    let dom = parser.parserHTML(response.body);
    let viewport = images(800, 600);
    render(viewport, dom);
    viewport.save("viewport.jpg");
}();