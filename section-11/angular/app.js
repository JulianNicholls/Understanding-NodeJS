const express = require('express');

const app     = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

// Log whenever anything is served.
app.use('/', (req, res, next) => {
  console.log(`Loading ${req.url}`);
  next();
});

const people = [
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  { name: 'Julian Nicholls' },
  { name: 'John Smith' }
];

app.get('/', (req, res) => { res.render('index', { serverPeople: people }); });

const port = process.env.PORT || 4000;

app.listen(port);
