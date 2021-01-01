let http = require('http');
let https = require('https');
let unzipper = require('unzipper');
let querystring = require('querystring')

//2.auth路由：接受code，用 code + client_id + client_secret 换 token

function auth(request, response) {
    let qurey = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(qurey.code, function (info) {
        response.write(`<a href="http://160.116.52.71:8083/?token=${info.access_token}">publish</a>`)
        // response.write(`<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`)
        response.end();
    })
}

function getToken(code, callback) {
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.6b72d509724beb68&client_secret=a646cc795b97a6e7b7cad0d4b6661741a39e5c8f`,
        port: 443,
        method: "POST"
    }, function (response) {
        let body = '';
        response.on('data', chunk => {
            body += (chunk.toString());
        })
        response.on('end', chunk => {
            callback(querystring.parse(body))
        })
    });
    request.end();
}

//4.publish路由：用token获取用户信息，检查权限，接受发布

function publish(request, response) {
    let qurey = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
    getUser(qurey.token, info => {
        if (info.login ==="FriendsA"){
            request.pipe(unzipper.Extract({ path: '../server/public/' }));
            request.on('end',function(){
                //发布成功返回值
                response.end("Success!");
            })
        }
    });

    // request.pipe(outFile)
}

function getUser(token, callback) {
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        method: "GET",
        port:443,
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": 'toy-publish-corazon'
        }
    }, function (response) {
        let body = '';
        response.on('data', chunk => {
            body += (chunk.toString());
        })
        response.on('end', chunk => {
            callback(JSON.parse(body));
        })
    });
    request.end();
}

http.createServer(function (request, response) {
    if (request.url.match(/^\/auth\?/)) {
        return auth(request, response)
    } else if (request.url.match(/^\/publish\?/)) {
        return publish(request, response)
    }
}).listen(8082, '0.0.0.0');