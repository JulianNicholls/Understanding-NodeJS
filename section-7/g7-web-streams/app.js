const http = require('http');
const fs   = require('fs');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    fs.createReadStream(__dirname + '/index.html').pipe(response);
}).listen(1337, 'node.local');
