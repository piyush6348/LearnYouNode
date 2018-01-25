
const fs = require('fs');
const path = require('fs');

function getObject(stats,localPath,fileName) {
    let obj = {};
    obj.time = (new Date().getTime() - stats.mtime)/1000;
    obj.filePath = localPath;
    obj.filename = fileName;
    return obj;
}


function readFiles(error,files) {
    if(error)
        return console.log(error);
    newFiles =[];
    files.forEach(function (value) { if(value != "program.js")
        newFiles.push(value) });
    files = newFiles;

    let fileDetails=[];
    files.forEach(function (value, index, array) {
        let localPath = (__dirname + ""+value);
        fs.stat(localPath,function (error,stats) {
            if(error)
                return console.log(error);

            fileDetails.push(getObject(stats,localPath,value));
            if(fileDetails.length == files.length)
                console.log(fileDetails);
        })
    })
}

fs.readdir(__dirname,readFiles);