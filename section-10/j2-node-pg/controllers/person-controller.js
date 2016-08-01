module.exports = (app) => {
    const parser  = require('body-parser');

    const urlencodedParser = parser.urlencoded({ extended: false });
    const jsonParser       = parser.json();

    app.get('/person/:id', (req, res) => {
        res.render('person', {
            id: req.params.id,
            qstring: req.query.qstr || '',
            first: '',
            last: ''
        });
    });

    app.post('/person', urlencodedParser, (req, res) => {
        res.render('person',  {
            id: req.body.id,
            qstring: req.query.qstr || '',
            method: 'POST',
            first: req.body.first,
            last: req.body.last
        });
    });

    app.post('/person.json', jsonParser, (req, res) => { console.log(req.body); });
};
