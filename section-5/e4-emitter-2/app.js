var Emitter = require('events');    // Node event emitter
var eventConfig  = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function () {
    console.log('Somewhere, someone said hello');
});

emitter.on(eventConfig.GREET, function () {
    console.log('A greeting occurred');
});

console.log('Hello');
emitter.emit(eventConfig.GREET);
