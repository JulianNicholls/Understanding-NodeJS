// This WILL end up exporting anything
// Mutating exports DOES work

exports.greet = function () {
    console.log('Hello via exports');
}

console.log('exports: ' + exports);
console.log('module.exports: ' + module.exports);
