
const fs = require('fs');
const path = require('path');

function doStuff(direcPath,fileExtension,call) {
    fs.readdir(direcPath,function (error,listOfFiles) {
        if(error)
            return call(error);

        var ans =[];
        for(var i=0; i<listOfFiles.length;i++)
        {
            let localFileExtension = path.extname(listOfFiles[i]);
            if(localFileExtension!=null && localFileExtension == ('.' + fileExtension) )
                ans.push(listOfFiles[i]);
        }
        return call(null,ans);
    });
}
module.exports = doStuff;
