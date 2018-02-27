
let socket = io();
$(function () {
    let msg_text = $('#txtMsg');
    let msg_btn = $('#btnMsg');
    let msg_lst = $('#ulMsg');
    let user_name = localStorage.getItem('user_name');

    function updateList(msgList) {
        msg_lst.empty();
        msgList.forEach(function (elem) {
            msg_lst.append(`<li>${elem.userName} -- ${elem.msg}</li>`);
        })
    }
    socket.emit('connect_user',user_name);
    socket.emit('get_msg_list');

    $(msg_btn).click(function () {
        socket.emit('new_msg',{msg:msg_text.val(), sender_id:socket.id});
    })


    socket.on('msg_list',(msgList)=>{
        updateList(msgList);
    })
    socket.on('disconnect', function() {
        window.location = "index.html";
    });
})