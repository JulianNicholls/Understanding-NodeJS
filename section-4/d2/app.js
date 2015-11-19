// Function statement
function greet() {
    console.log('hi');
}

greet();

// Functions are first-class
function logGreeting(fn) {
    console.log('Running ' + fn.name + ' (' +
                (typeof(fn.displayName) !== 'undefined' ? fn.displayName : 'None') +
                ')');

    fn();
}

logGreeting(greet);

// Function expression
var greetMe = function() {
    console.log('Hi Julian');
}

greetMe();

// Still first-class
logGreeting(greetMe);

// Anonymous function
logGreeting(function () {
    console.log('Hello Julian');
});
