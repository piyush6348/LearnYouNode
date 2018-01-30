
// equivalent to window.onload()
$(function () {

    let newToDo = $("#newToDo");
    let addToDo = $("#addToDo");
    let toDoList = $("#toDoList");

    function refreshToDos() {
        $.get('/todos',function (response) {
            toDoList.empty();
            for(data of response){
                toDoList.append(`<li>${data.task}</li>`)
            }
        })
    }
    refreshToDos();
    addToDo.click(function () {
        $.post('/newToDo',
            {task: newToDo.val()},
            function (response) {
                if(response.success)
                    refreshToDos();
            })
    })
})