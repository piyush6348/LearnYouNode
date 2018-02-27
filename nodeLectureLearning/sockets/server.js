
const express = require('express');
const socket_io = require('socket.io');

const app = express();

// get server of app.
// Actually when we make obj of express then
// two components are created app and server(on top of which app runs)
const http = require('http');
const server = http.Server(app);

// creates an io server running on top of server.
// so our server has 2 things running on top of it ie
// io server and express app.
const io = socket_io(server);

app.get('/hello',(r,s)=>s.send("Hello"));

// Actually for every user interaction
// this below handler's new instance is created
// hence we need the context like which socket
// are we talking abt inside the callback
// hence a paramter named socket comes in callback

io.on('connection',(socket)=>{
    console.log("New socket connection added");

    socket.on('new_message',(data)=>{
        let chat = `${socket.id}: ${data}`;
        console.log(chat);

        // emitting on socket would mean that
        // only current socket/user will be able to receive the emitted stuff
        // we want all present to receive that
        ///// socket.emit('rcvd_message',chat);

        // so we emit on io
        // ie all sockets connected would listen then
        ///// io.emit('rcvd_message',chat);

        // suppose we want to broadcast to all except us
        // so we can use
        socket.broadcast.emit('rcvd_message',chat);
    })

})

app.use('/',express.static(__dirname +'/public_static'));

server.listen(3245,function(){
    console.log("Server started at port http://localhost:3245");
});