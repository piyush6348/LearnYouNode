
// equivalent to window.onload()
$(function () {

    let newToDo = $("#newToDo");
    let addToDo = $("#addToDo");
    let toDoList = $("#toDoList");

    function refreshToDos() {
        $.get('/todos',function (response) {
            toDoList.empty();
            for(data of response){
                toDoList.append(`
                    <li itemid="${data.id}">
                        <span>${data.position}</span>
                        <span>${data.task}</span>
                        <span>done = ${data.done}</span>
                        <button id="up">Move Up </button>
                        <button id="down">Move Down </button>
                    </li>`)
            }
        })
    }
    refreshToDos();
    addToDo.click(function () {
        $.post('/newToDo',
            {
                task: newToDo.val(),
                done: false,
                position: toDoList.children().length
            },
            function (response) {
                console.log("Server response on add toDo "+ response.success);
                if(response.success)
                    refreshToDos();
                else
                    console.log("Error msg is "+response.errorMsg);
            })
    })
})