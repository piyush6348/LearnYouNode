
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db')
/*
db.productTable.create({pName:"Product 1",pPrice:100});
db.productTable.create({pName:"Product 2",pPrice:200});
db.productTable.create({pName:"Product 3",pPrice:300});
db.productTable.create({pName:"Product 4",pPrice:400});
db.productTable.create({pName:"Product 5",pPrice:500});
db.productTable.create({pName:"Product 6",pPrice:600});
*/
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