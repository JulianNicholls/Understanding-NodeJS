var http = require('http');
var fs   = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    fs.createReadStream(__dirname + '/index.html').pipe(response);
}).listen(1337, 'node.local');
