// Object properties and methods

var obj = {
    greet: 'Hello from object'
};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);

// Functions and arrays

var arr = [];

arr.push(function () {
    console.log('Hello from the array 1')
});

arr.push(function () {
    console.log('Hello from the array 2')
});

arr.push(function () {
    console.log('Hello from the array 3')
});

arr.forEach(function(item) {
    item();
});
