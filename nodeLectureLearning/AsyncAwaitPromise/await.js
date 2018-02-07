
function sayHello() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,1000,"Hello");
    })
}

async function awaitHello() {
    let h = await sayHello();
    console.log(h);
}

//console.log(awaitHello());
awaitHello();

// convert any function to return promise
// also called as Promisification
// done by bluebird api
// A easier way to do it is

async function readFileAsync() {
    return readFileSync();
}