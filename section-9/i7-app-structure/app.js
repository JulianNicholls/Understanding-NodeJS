const express          = require('express');

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
personController(app);
apiController(app);

// get NODE_PORT environment variable, or default to 1967
const port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);
app.listen(port);
