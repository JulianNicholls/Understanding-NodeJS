// Export an object, which will be cached by require so changes to it
// externally will be reflected in all returned vinstances.
function Greeter() {
    this.greeting = 'Hello from object';

    this.greet = function () {
        console.log(this.greeting);
    }
};

module.exports = new Greeter();
