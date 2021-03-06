module.exports = (app) => {
    const moment  = require('moment');

    app.get('/api', function(req, res) {
        res.json({
            firstname: 'Julian',
            lastname: 'Nicholls',
            location: 'UK',
            datestamp: moment().format('YYW-E HH:mm:ss')
        });
    });
};
