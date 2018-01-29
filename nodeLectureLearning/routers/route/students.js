
const route = require('express').Router();

let students = [
    {name:"Piyush",age:1},
    {name:"Kumar",age:2},
    {name:"Gupta",age:3}
]

route.get('/',(req,res,next)=>{
    res.send(students);
})

module.exports=route;