var greet = require('./greet');

// greet() is not present due to export failure

var greet2 = require('./greet2');

greet2.greet();
