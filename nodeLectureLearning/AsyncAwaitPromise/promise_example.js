
let p = new Promise(function (resolve,reject) {

    // do some long running task here
    // when it's successfully done
    resolve();

    // if it fails
    reject();
})

p.then(function () {
    
})

p.catch(function () {
    
})