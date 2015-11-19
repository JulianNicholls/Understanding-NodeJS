// Consumer of greet

var greet = require('./greet');

greet();

// Object literal

var person = {
    first_name: 'John',
    last_name: 'Doe',
    greet: function () {
        console.log('Hello ' + this.first_name + ' ' + this.last_name)
    }
}

person.greet();     // Equivalent - person['greet']();

console.log(person['first_name'])

// Function constructor

function Person(first, last) {
    this.first_name = first;
    this.last_name  = last;

    this.formal = function() {
        console.log('Good morning Ms ' + this.last_name);
    }
};

var jane = new Person('Jane', 'Doe');
console.log(jane.first_name + ' ' + jane.last_name);
console.log(jane.__proto__);

// Use its prototype

Person.prototype.friendly = function() {
    console.log('Howdy ' + this.first_name);
};

jane.friendly();
jane.formal();

console.log(jane.__proto__);

// Pass by value

function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// Pass by reference

function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

// Immediately Invoked Function Expressions (IIFE)

var first = 'Jane';

(function (last) {
    console.log('IIFE');
    var first = 'John';     // Different first
    console.log(first);
    console.log(last);
}('Doe'));

console.log(first);
