const express   = require('express');
const mongoose  = require('mongoose');
const config    = require('./config');

const setupController = require('./controllers/setupController');
const apiController   = require('./controllers/apiController');

// Setuo app

const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Connect to our NoSQL database
mongoose.connect(config.getDBConnectionString());

// Call each controller in turn to set themselves up
setupController(app);
apiController(app);

const port = process.env.PORT || 4000

app.listen(port)
