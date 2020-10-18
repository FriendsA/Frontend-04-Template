const http = require("http");

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on("end", () => {
        // body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(
`<html maaa="a" sss='b'>
        <head>
            <style>
                body div.myid #myid{
                    width:100px;
                    background-color:#ff5000;
                }
                body div img#myid.myid{
                    width:30px;
                    background-color:#ff1111;
                }
            </style>
        </head>
        <body>
            <div class="myid">
                <img id="myid" class="myid"/>
                <img />
            </div>
        </body>
    </html>
`);
    });
}).listen(8088);

console.log("server started");