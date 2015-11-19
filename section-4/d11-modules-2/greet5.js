// Return only what is desired to be made visible.

var greeting = 'Hello with some privacy';

var greet = function() {
    console.log(greeting);
}

module.exports = {
    greet: greet
};
