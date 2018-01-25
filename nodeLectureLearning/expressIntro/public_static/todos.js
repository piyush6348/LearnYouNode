
$(function () {

    $('#addToDo').click(function () {
        let newToDoData = $('#newToDo').val();
        let todoList = $('#todoList')

        $.get('/addToDo?task='+newToDoData,function (response) {
            console.log(" response is "+response.toString())
            todoList.empty();

            for(task of response){
                todoList.append(`<li> ${task} </li>`);
            }
        })
    })
})