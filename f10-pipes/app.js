var fs      = require('fs');
var zlib    = require('zlib');

var readable    = fs.createReadStream(__dirname + '/bobross.txt');
var writable    = fs.createWriteStream(__dirname + '/bobross-copy.txt');
var compressed  = fs.createWriteStream(__dirname + '/bobross.txt.gz');
var gzip        = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
