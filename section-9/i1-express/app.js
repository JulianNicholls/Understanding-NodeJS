const express = require('express');
const fs      = require('fs');
const moment  = require('moment');

const app     = express();

app.get('/', (req, res) => {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
});

app.get('/api', (req, res) => {
    res.json({
        firstname: 'Julian',
        lastname: 'Nicholls',
        location: 'UK',
        datestamp: moment().format('YYW-E HH:mm:ss')
    });
});

// get NODE_PORT environment variable, or default to 1967
const port = process.env.NODE_PORT || 1967

console.log(`Listening on port ${port}`);

app.listen(port);
