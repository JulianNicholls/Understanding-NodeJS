const express          = require('express');
const mongoose         = require('mongoose');

const staticController = require('./controllers/static-controller');
const personController = require('./controllers/person-controller');
const apiController    = require('./controllers/api-controller')

const app              = express();

// Static file serving.
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', (req, res, next) => {
    console.log(`Loading ${req.url}`);
    next();
});

app.set('view engine', 'ejs')

staticController(app);
apiController(app);

// Example connection to MongoDB
mongoose.connect('mongodb://mongodb.local/test');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    first_name: String,
    last_name: String,
    address: String
});

const Person = mongoose.model('Person', personSchema);

const john = Person({
    first_name: 'John',
    last_name: 'Smith',
    address: 'New York, NY'
});

john.save(function(err) {
    if(err)
        throw err;

    console.log('Person saved.')
});

const jane = Person({
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
const port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
