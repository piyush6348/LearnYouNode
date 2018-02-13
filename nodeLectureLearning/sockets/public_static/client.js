

// optional but we can also specify string here ie actually link of server.
// by default it takes the one in address bar.
// but can come handy when we have get,post requests handled at diff server
// and socket requests handled at different server.

let socket = io();

$(function () {

    let newMsg = $("#newmsg");
    let sendMsg = $("#sendmsg");
    let msgList = $("#msglist");

    sendMsg.click(function () {
        socket.emit("new_message",newMsg.val());
    })
    socket.on("rcvd_message",(data)=>{
        msgList.append(`<li>${data}</li>`);
    })
})