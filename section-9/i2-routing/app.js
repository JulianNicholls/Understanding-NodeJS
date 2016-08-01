const express = require('express');
const fs      = require('fs');
const moment  = require('moment');

const app     = express();

app.get('/', function(req, res) {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Show Person</h1><p>Person ID: ${req.params.id}</p></body></html>`)
});

app.get('/person/:id/edit', function(req, res) {
    res.send(`<html><head></head><body><h1>Edit Person</h1><p>Person ID: ${req.params.id}</p></body></html>`)
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
const port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
