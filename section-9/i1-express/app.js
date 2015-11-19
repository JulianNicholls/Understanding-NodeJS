var express = require('express');
var fs      = require('fs');
var moment  = require('moment');

var app     = express();

app.get('/', function(req, res) {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get('/api', function(req, res) {
    res.json({
        firstname: 'Julian',
        lastname: 'Nicholls',
        location: 'UK',
        datestamp: moment().format('YYW-E HH:mm:ss')
    });
});

// get NODE_PORT environment variable, or default to 1967
var port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
