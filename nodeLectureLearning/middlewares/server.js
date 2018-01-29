
const express = require('express');

const app = express();

function m1(req,res,next) {
    console.log("m1");
    next();
}

function m2(req,res,next) {
    console.log("m2");
    next();
}

function m3(req,res,next) {
    console.log("m3");
    next();
}

app.use(m1);
app.use(m2);

app.get('/',function (req,res,next) {
    console.log("Sending Hello");
    res.send("Hello");
})

app.use(m3);
app.listen(4444,function(){
    console.log("Server started at port http://localhost:4444");
});