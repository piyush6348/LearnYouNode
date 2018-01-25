
const fs = require('fs');
const path = require('path');

function getObject(stats,localPath,fileName) {
    let obj = {};
    obj.time = (new Date().getTime() - stats.mtime)/1000;
    obj.filePath = localPath;
    obj.filename = fileName;
    return obj;
}

function updateFiles(filesDetail) {
    filesDetail.sort(function (a, b) { return b.time - a.time });
    let newNames =[];

    let totalLength = (filesDetail.length).toString().length;

    filesDetail.forEach(function (value, index, array) {
        let currLength = index.toString().length;
        let name = new Array(totalLength-currLength+1).join("0");
        name+=value.filename
        name = path.join(__dirname,name);
        newNames.push(name);
    })

    filesDetail.forEach(function (value, index, array) {
        fs.rename(value.filePath,newNames[index],function () {
            console.log(value.filename + " done");
        })
    })
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
        let localPath = path.join(__dirname,value);
        fs.stat(localPath,function (error,stats) {
            if(error)
                return console.log(error);

            fileDetails.push(getObject(stats,localPath,value));
            if(fileDetails.length == files.length)
                updateFiles(fileDetails);
        })
    })
}

fs.readdir(__dirname,readFiles);