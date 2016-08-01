const http = require('http');
const fs   = require('fs');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // Adding the encoding turns it into a string from a buffer
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    html = html.replace('{message}', 'Hello Julian');

    response.end(html);
}).listen(1337, 'node.local');
