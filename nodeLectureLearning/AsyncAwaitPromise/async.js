
async function sayHello() {
    return "Hello World";
}

function sayHelloAns() {
    return "Hello World";
}
function sayHello2() {
    return new Promise((resolve, reject) =>{
        resolve(sayHelloAns())
    } )
}

let h = sayHello();

// do some tasks here

h.then((data)=>{
    console.log(data);
})