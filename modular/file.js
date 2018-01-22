
const mod = require('./module');

const fs = require('fs');
const path = require('path');

const filepath = process.argv[2];
const fileextension = process.argv[3];

function callback(error,data) {
    if(error != null)
        return console.log(error);
    for(var i=0;i<data.length;i++)
        console.log(data[i]);
}

mod(filepath,fileextension,callback);