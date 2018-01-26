
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const file = path.join(__dirname,'file');

console.log(path.join(__dirname,'public_static'));
app.use('/',express.static(path.join(__dirname,'public_static')));
app.get('/pageloaded',function (request,response,next) {

    fs.readFile(file,function (error,data) {
        if(error)
            return console.log(error);
        console.log("File read when page loaded ",data.toString());
        response.send(data.toString());
    })
})

app.get('/addNewToDo',function (request,response,next) {
    fs.appendFile(file,","+request.query.task,function (error) {
        if(error)
            response.send(error);
        fs.readFile(file,function (error,data) {
            if(error)
                response.send(error.toString());
            response.send(data.toString());
        })
    })
})
app.listen(8000);
