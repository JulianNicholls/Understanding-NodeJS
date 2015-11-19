var fs = require('fs');

// ASynchronous file read (will happen second, at least sometimes)
var greet2 = fs.readFile(__dirname + '/greet.txt', function(error, data) {
    console.log(data);
    console.log(data + 'ASYNchronously');
});

// Synchronous file read
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');  // UTF-8 is default

console.log(greet + 'SYNchronously');
