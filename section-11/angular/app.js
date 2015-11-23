var express = require('express');

var app     = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

var people = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'Julian Nicholls' },
    { name: 'John Smith' }
];

app.get('/', function(req, res) {
    res.render('index', { serverPeople: people });
});

var port = process.env.PORT || 4000;

app.listen(port);
