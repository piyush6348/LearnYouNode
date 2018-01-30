
const route = require('express').Router();

let students = [
    {name:"Piyush",age:1},
    {name:"Kumar",age:2},
    {name:"Gupta",age:3}
]

route.get('/',(req,res,next)=>{
    res.send(students);
})

// There is no filtering on this path
// particularly as /abc,/1
// both will result into execution of response handler
// of this request.
route.get('/:id',(req,res,next) => {
    if(isNaN(parseInt(req.params.id)))
        next();
    res.send(students[req.params.id - 1]);
})

// req.baseUrl gives the parent path available to current file
route.post('/new',(req,res)=>{
    console.log("Post method called for "+req.body.name);

    students.push({
        name: req.body.name,
        age: req.body.age
    })
    console.log("baseUrl "+ req.baseUrl);
    res.redirect(req.baseUrl);
})
module.exports=route;