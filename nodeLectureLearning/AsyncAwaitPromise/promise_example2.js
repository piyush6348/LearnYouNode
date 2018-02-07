
let s = new Promise((resolve, reject) => {
    
    // calling resolve method after 1s
    setTimeout(resolve,1000);
})

// attaching the function to be resolved after 2s
// ie after the resolve is called
// then we are attaching the func
setTimeout(function () {
    s.then(function () {
        console.log("Promise fullfilled");
    })
},2000)