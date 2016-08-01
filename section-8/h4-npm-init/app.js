const http    = require('http');
const fs      = require('fs');
const moment  = require('moment');

http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const obj = {
            firstname: 'Julian',
            lastname: 'Nicholls',
            location: 'UK',
            datestamp: moment().format('YYW-E HH:mm:ss'),
            date_explanation: 'Year, Week Number, ISO Week Day'
        }

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, 'node.local')
