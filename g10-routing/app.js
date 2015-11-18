var http    = require('http');
var fs      = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'Julian',
            lastname: 'Nicholls',
            location: 'UK'
        }

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, 'node.local')
