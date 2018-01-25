
const fs = require('fs')
const path = require('path')


const inputFile = path.join(__dirname,'input');
const outputFile = path.join(__dirname,'output');


function getFizzBuzzForNum(num) {
    num = parseInt(num);
    temp="";
    if(num%3==0)
        temp+="fizz";
    if(num%5==0)
        temp+="buzz";
    if(temp =="")
        temp+=i;
    return temp;
}
function fileRead(error,contents) {
    if(error)
        return console.log(error);
    contents = contents.toString().split(/\r?\n/);

    var ans = "";
    var num = 0,temp="";
    for(var i=0;i<contents.length;i++)
    {
        ans+=getFizzBuzzForNum(contents[i]);
        ans+="\n";
    }

    fs.writeFile(outputFile,ans,'utf8',function (error) {
        if(error)
            return console.log(error);
        console.log("File written");
    })
}


fs.readFile(inputFile,fileRead);