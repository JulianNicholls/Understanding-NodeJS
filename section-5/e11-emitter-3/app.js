'use strict';   // Enable ES6 extensions

var Greeter = require ('./greeter');

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log('Someone greeted with data: ' + data)
});

greeter1.on('greet', function () {
    console.log('Someone greeted, ignored data')
});

greeter1.greet('Julian');
