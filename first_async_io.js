
const fs = require('fs');

function read(callbackFunction) {

    let file = fs.readFile(process.argv[2],function doneReading(error,fileContents) {
        callbackFunction(fileContents);
    });
}

function print(fileContents) {
    console.log(fileContents.toString().split('\n').length-1);
}

read(print);
