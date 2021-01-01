let http = require("http");
let archiver = require("archiver");
let child_process = require("child_process");
let querystring = require('querystring');

//1.打开 https://github.com/login/oauth/authorize

// child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.6b72d509724beb68`);

//3.创建server 接受token 点击发布

http.createServer(function (request, response) {
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
    publish(query.token, function(info){
        response.end(info);
    });
}).listen(8083, '0.0.0.0');


function publish(token, callback) {

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    let request = http.request({
        method: "POST",
        hostname: "160.116.52.71",
        // hostname: '127.0.0.1',
        port: 8082,
        path: "/publish?token=" + token,
        headers: {
            'Content-Type': "application/octet-stream",
            // 'Content-Length': stats.size
        }
    }, response => {
        let body = "";
        response.on('data', chunk => {
            body += (chunk.toString());
        })
        response.on("end", function () {
            callback(body)
        })
    });

    archive.directory("./sample/", false);
    archive.finalize();
    archive.pipe(request);
}