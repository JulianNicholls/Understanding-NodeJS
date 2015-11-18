var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var obj = {
        firstname: 'Julian',
        lastname: 'Nicholls'
    }

    response.end(JSON.stringify(obj));
}).listen(1337, 'node.local');
