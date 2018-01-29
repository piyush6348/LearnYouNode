
const route = require('express').Router();

let teachers = [
    {name:"Arnav",age:11},
    {name:"Prateek",age:12},
    {name:"Ayush",age:13}
]

route.get('/',(req,res,next)=>{
    res.send(teachers);
})

module.exports = route;