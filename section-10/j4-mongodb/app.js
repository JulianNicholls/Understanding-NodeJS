var express          = require('express');
var mongoose         = require('mongoose');

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
apiController(app);

// Example connection to MongoDB
mongoose.connect('mongodb://mongodb.local/test');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    first_name: String,
    last_name: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    first_name: 'John',
    last_name: 'Smith',
    address: 'New York, NY'
});

john.save(function(err) {
    if(err)
        throw err;

    console.log('Person saved.')
});

var jane = Person({
    first_name: 'Jane',
    last_name: 'Doe',
    address: 'Las Vegas, NV'
});

jane.save(function(err) {
    if(err)
        throw err;

    console.log('Person saved.')
});

personController(app, Person);

// get NODE_PORT environment variable, or default to 1967
var port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
