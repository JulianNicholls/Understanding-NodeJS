var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function () {
    console.log('Somewhere, someone said hello');
});

emitter.on('greet', function () {
    console.log('A greeting occurred');
});

console.log('Hello');
emitter.emit('greet');
