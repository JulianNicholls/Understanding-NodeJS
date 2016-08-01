const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    const obj = {
        firstname: 'Julian',
        lastname: 'Nicholls'
    };

    response.end(JSON.stringify(obj));
}).listen(1337, 'node.local');
