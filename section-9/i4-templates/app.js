var express = require('express');
var fs      = require('fs');
var moment  = require('moment');

var app     = express();

// Static file serving.
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', function(req, res, next) {
    console.log(`Loading ${req.url}`);
    next();
});

// Set view engine to EJS
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', {
        id: req.params.id,
        edit: false
    });
});

app.get('/person/:id/edit', function(req, res) {
    res.render('person', {
        id: req.params.id,
        edit: true
    });
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
