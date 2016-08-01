const express = require('express');
const fs      = require('fs');
const moment  = require('moment');

const app     = express();

// Static file serving.
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', (req, res, next) => {
    console.log(`Loading ${req.url}`);
    next();
});

app.get('/', (req, res) => { fs.createReadStream(__dirname + '/index.html').pipe(res); });

app.get('/person/:id', (req, res) => {
    res.send(`<html><head><link rel="stylesheet" href="/assets/style.css"></head><body><h1>Show Person</h1><p>Person ID: ${req.params.id}</p></body></html>`)
});

app.get('/person/:id/edit', (req, res) => {
    res.send(`<html><head><link rel="stylesheet" href="/assets/style.css"></head><body><h1>Edit Person</h1><p>Person ID: ${req.params.id}</p></body></html>`)
});

app.get('/api', (req, res) => {
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
