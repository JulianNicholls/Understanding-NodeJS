var util = require('util');

var name = "Julian";
var greeting = util.format("Hello %s", name);

util.log(greeting);
