// This will NOT end up exporting anything.
// Replacing exports does NOT work

exports = function () {
    console.log('Hello via exports');
}

console.log('exports: ' + exports);
console.log('module.exports: ' + module.exports);
