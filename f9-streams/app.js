var fs          = require('fs');
var readable    = fs.createReadStream(__dirname + '/bobross.txt', { encoding: 'utf8' });
var writable    = fs.createWriteStream(__dirname + '/bobross-copy.txt');

readable.on('data', function (chunk) {
//    console.log(chunk)
    console.log(chunk.length)
    writable.write(chunk);
});
