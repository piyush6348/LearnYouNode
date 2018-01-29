
const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("Global Middleware");
    next();
})

app.use('/info',(req,res,next) => {
   console.log("info path middleware");
   next();
});

// A middleware
app.get('/',(req,res,next)=>{
    console.log("/ middleware");
    next();
})

// A response handler
app.get('/',(req,res) => {
    console.log("/ response handler");
    res.send("/ response handler");
})

app.get('/info',(req,res) => {
    res.send("/info response handler");
})

app.listen(4756,function(){
    console.log("Server started at port http://localhost:4756");
});