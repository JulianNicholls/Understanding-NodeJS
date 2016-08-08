const express   = require('express');
const mongoose  = require('mongoose');
const config    = require('./config');

const setupController = require('./controllers/setupController');
const apiController   = require('./controllers/apiController');

// Set up app, with /assets -> ./public and EJS as the view engine
const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Connect to our NoSQL database
mongoose.connect(config.getDBConnectionString());

// Call each controller in turn to set themselves up
setupController(app);
apiController(app);

// Set up to listen on the requested port, or 4000 by default
const port = process.env.PORT || 4000

app.listen(port)
