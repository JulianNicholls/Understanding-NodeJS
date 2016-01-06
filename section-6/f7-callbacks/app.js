function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'John Doe'
    };

    callback(data);
};

greet(function () {
    console.log('  Callback was invoked without data');
})

greet(function(data) {
    console.log('  Callback was invoked with ' + data);
})

greet(function(data) {
    console.log('  Different callback was invoked with this name: ' + data.name);
})
