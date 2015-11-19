'use strict';   // Enable ES6 extensions

var Emitter = require('events');

module.exports = class Greeter extends Emitter {
    constructor() {
        super();    // Call Emitter constructor
        this.greeting = 'Hello World';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);

        this.emit('greet', data);
    };
}
