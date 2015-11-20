module.exports = function (app) {
    var parser  = require('body-parser');

    var urlencodedParser = parser.urlencoded({ extended: false });
    var jsonParser       = parser.json();

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
    });
};
