var util = require('util');

function Person() {
    this.firstname = 'Samuel';
    this.lastname = 'Plod';
};

Person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this);      // Construct base Person
    this.number = 1234;
}

util.inherits(Policeman, Person);   // Inherit Person functions

var officer = new Policeman();
officer.greet();    // No lastname or firstname. just prototype without Person.call(this)
