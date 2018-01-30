
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'someuser',
    database: 'somedatabase',
    password: 'somepass'
});


// connection.query('SELECT * from courses',
//     function (error,results,fields) {
//     console.log("results = ");
//     console.log(results);
//     console.log("fields = ");
//     console.log(fields);
// })

connection.query("INSERT INTO courses(name) VALUES('Crux')",
    function (error,results,fields) {
        if(error)
            throw error;
        console.log("results = ");
        console.log(results);
        console.log("fields = ");
        console.log(fields);
})