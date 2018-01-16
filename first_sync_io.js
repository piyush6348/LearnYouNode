
const fs = require('fs');
// synchronous reading file

// it returns the file read
// it also blocks the main thread
var file = fs.readFileSync((process.argv)[2]);

console.log(file.toString().split('\n').length -1);