const express = require('express');
const bodyParser = require('body-parser');
const ToDos = require('./db');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public_static'))

app.post('/newToDo', (req, res) => {
    console.log("Request at server is " + req.body.task + " " + req.body.done);
    ToDos.create({
        task: req.body.task,
        done: req.body.done,
        position: req.body.position
    }).then(function () {
        res.send({success: true});
    }).catch(function (error) {
        res.send({success: false, errorMsg: error.toString()});
    })
})

app.use('/todos', (req, res) => {
    ToDos.findAll({order: [['position', 'ASC']]}).then(function (rows) {
        res.send(rows);
    }).catch(function (error) {
        res.send({error: "ToDos cannot be retrieved"})
    })
})
app.listen(2345, function () {
    console.log("Server started at port http://localhost:2345");
});