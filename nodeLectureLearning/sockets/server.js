
const express = require('express');

const app = express();

app.use('/',express.static(__dirname +'/public_static'));

app.listen(3245,function(){
    console.log("Server started at port http://localhost:3245");
});