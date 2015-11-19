var obj = {
    name: 'John Doe',
    greet: function (param1, param2) {
        console.log(`Hello ${this.name}, ${param1}, ${param2}`);
    }
};

obj.greet();

obj.greet.call({ name: 'Jane Doe' }, 'param1', 'param2');   // Change 'this' value and pass indivdual params

obj.greet.apply({ name: 'Jane Doe' }, ['param3', 'param4']);   // Change 'this' value and pass params array
