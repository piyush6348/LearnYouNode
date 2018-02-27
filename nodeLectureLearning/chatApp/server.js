
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

let msgList = [];
let userList = {};
io.on('connection', (socket)=>{
    console.log("New socket connection added");
    socket.on('connect_user', (userName)=>{
        console.log(socket.id);
        console.log(userName);
        userList[socket.id] = userName
        socket.emit('messages',true);
    })

    socket.on('new_msg',(data)=>{
        let temp = {};
        temp.msg = data.msg;
        temp.userName = userList[data.sender_id];
        msgList.push(temp);
        io.emit('msg_list',msgList);
    })

    socket.on('get_msg_list',()=>{
        socket.emit('msg_list',msgList);
    })
})

app.use('/', express.static(__dirname + '/public_static'));
server.listen(3450, function () {
    console.log("Server started at port http://localhost:3450");
});