var greet1 = require('./greet1');

greet1();

var greet2 = require('./greet2');
var greet2_1 = require('./greet2').greet;

greet2.greet();
greet2_1();


var greet3 = require('./greet3');
var greet3_1 = require('./greet3');     // Same instance, require caches

greet3.greet();

greet3.greeting = 'Changed Hello from object';

greet3_1.greet();   // Proof

var greet3_2 = require('./greet3');     // Still same instance

greet3_2.greet();

var Greet4 = require('./greet4');
var greeter4 = new Greet4();

greeter4.greet();

var greet5 = require('./greet5');

greet5.greet();
