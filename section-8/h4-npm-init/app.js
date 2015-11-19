var http    = require('http');
var fs      = require('fs');
var moment  = require('moment');

http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'Julian',
            lastname: 'Nicholls',
            location: 'UK',
            datestamp: moment().format('YYW-E HH:mm:ss')
        }

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, 'node.local')
