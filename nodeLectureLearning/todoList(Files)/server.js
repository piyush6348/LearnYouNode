
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.listen(8000);

const file = path.join(__dirname,'file');

app.get('/',function (request,response,next) {

    fs.readFile(file,function (error,data) {
        if(error)
            return console.log(error);
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
app.use(path.join(__dirname,"public_static"));