
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db')

const routes = {
    cart: require('./cart')
}

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',express.static(__dirname+'/../public_static'));

app.use('/cart',routes.cart);



app.listen(2345,function(){
    console.log("Server started at port http://localhost:2345");
});