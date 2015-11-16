var Emitter = require('events');
var util    = require('util');

function Greeter() {
    this.greeting = 'Hello World';
};

util.inherits(Greeter, Emitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);

    this.emit('greet', data);
};

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log('Someone greeted with data: ' + data)
});

greeter1.on('greet', function () {
    console.log('Someone greeted, ignored data')
});

greeter1.greet('Julian');

