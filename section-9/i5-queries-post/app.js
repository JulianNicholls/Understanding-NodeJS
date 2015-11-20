var express = require('express');
var fs      = require('fs');
var moment  = require('moment');
var parser  = require('body-parser');

var app              = express();
var urlencodedParser = parser.urlencoded({ extended: false });
var jsonParser       = parser.json();

// Static file serving.
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', function(req, res, next) {
    console.log(`Loading ${req.url}`);
    next();
});

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', {
        id: req.params.id,
        qstring: req.query.qstr || '',
        first: '',
        last: ''
    });
});

app.post('/person', urlencodedParser, function(req, res) {
    res.render('person',  {
        id: req.body.id,
        qstring: req.query.qstr || '',
        method: 'POST',
        first: req.body.first,
        last: req.body.last
    });
});

app.post('/person.json', jsonParser, function(req, res) {
    console.log(req.body);
})

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
