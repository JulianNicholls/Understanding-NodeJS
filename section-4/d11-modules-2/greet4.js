// Return a constructor function

function Greeter() {
    this.greeting = 'Hello from constructed object';

    this.greet = function () {
        console.log(this.greeting);
    }
};

module.exports = Greeter;   // Return a function constructor
