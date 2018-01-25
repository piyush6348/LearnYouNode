
const express = require('express');
const path = require('path')
const app = express();
var addedData=[];

app.get('/',function (req,res,next) {
    res.send("Hello");
});

app.get('/greet',function (req,res,next) {
    console.log(req.query);
    let name = req.query.name;
    res.send("Greetings to "+name);
})
app.get('/addToDo',function (req,res,next) {
    addedData.push(req.query.task);
    console.log(addedData);
    res.send(addedData);
})
app.use('/public',express.static(path.join(__dirname,'public_static')))
app.listen(8000);