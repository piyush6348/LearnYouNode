
const route = require('express').Router();

let students = [
    {name:"Piyush",age:1},
    {name:"Kumar",age:2},
    {name:"Gupta",age:3}
]

route.get('/',(req,res,next)=>{
    res.send(students);
})

route.get('/:id',(req,res) => {
    res.send(students[req.params.id - 1]);
})

route.post('/new',(req,res)=>{
    console.log("Post method called for "+req.body.name);

    students.push({
        name: req.body.name,
        age: req.body.age
    })
    res.send("Student added");
})
module.exports=route;