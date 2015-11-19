var buffer = new Buffer('Hello', 'utf8');   // UTF-8 is the default

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write('Je');
console.log(buffer);
console.log(buffer.toString());

// ES6 from here on

var abuf = new ArrayBuffer(8);      // 8 bytes
var view = new Int32Array(abuf);    // hence 2 Int32s

view[0] = 12345;
view[1] = 67890;

console.log(view);
console.log(abuf);
