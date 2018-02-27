let socket = io();

$(function () {
    let txtUserName = $('#txtUserName');
    let btnUserName = $('#btnUserName');

    $(btnUserName).click(function () {
        console.log(socket.id);
        socket.emit('connect_user',txtUserName.val());
    })
    socket.on('messages',(data)=>{
        console.log("Move to next Page");
        localStorage.setItem("socket",socket);
        localStorage.setItem("user_name",txtUserName.val());
        window.location = "chats.html";
    })
})