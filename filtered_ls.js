
const fs = require('fs');
const path = require('path');

const filepath = process.argv[2];
const fileextension = process.argv[3];

function callback(error,listOfFiles) {
    if(error)
        return console.error(error);

    for(var i=0;i<listOfFiles.length;i++)
    {
        let localFileExtension = path.extname(listOfFiles[i]);
        if(localFileExtension!= null && localFileExtension == ('.'+fileextension))
            console.log(listOfFiles[i]);
    }
}

fs.readdir(filepath,callback);