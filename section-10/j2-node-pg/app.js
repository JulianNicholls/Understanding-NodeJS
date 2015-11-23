var express          = require('express');
var pg               = require('pg');

var staticController = require('./controllers/static-controller');
var personController = require('./controllers/person-controller');
var apiController    = require('./controllers/api-controller')

var app              = express();

// Static file serving.
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', function(req, res, next) {
    console.log(`Loading ${req.url}`);
    next();
});

app.set('view engine', 'ejs')

staticController(app);
personController(app);
apiController(app);

// Simple example connection to Postgres.
var client = new pg.Client('postgres://pg.local/postgres');

client.connect(function(err) {
    if(err) {
        console.log(`There was a problem connecting to PG: ${err}`);
    }
    else {
        client.query('SELECT NOW() AS "theTime"', function(err, result) {
            if(err) {
                console.log(`There was a problem getting time: ${err}`);
            }
            else {
                console.log(result.rows[0].theTime);
                client.end();
            }
        });
    }
});

// get NODE_PORT environment variable, or default to 1967
var port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
