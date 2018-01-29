
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = {
    students: require('./students'),
    teachers: require('./teachers')
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/students',routes.students);
app.use('/teachers',routes.teachers);

app.listen(5678,function(){
    console.log("Server started at port http://localhost:5678");
});