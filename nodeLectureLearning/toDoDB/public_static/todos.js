// equivalent to window.onload()
$(function () {

    let newToDo = $("#newToDo");
    let addToDo = $("#addToDo");
    let toDoList = $("#toDoList");

    function refreshToDos() {
        $.get('/todos', function (response) {
            toDoList.empty();
            for (data of response) {
                toDoList.append(`
                    <li itemid="${data.id}">
                        <span>${data.position}</span>
                        <span>${data.task}</span>
                        <span>done = ${data.done}</span>
                        <button class="up">Move Up </button>
                        <button class="down">Move Down </button>
                    </li>`)
            }
            $('.up').click(upButtonClickListener);
            $('.down').click(downButtonClickListener);
        })

    }

    /*toDoList.on('click','li',*/
    function upButtonClickListener(e) {
        console.log("upButtonClickListener");
        let pos1 = $(this).index();
        pos1 = $(this).parent().index();
        let pos2 = pos1 - 1;
        if (pos2 == -1)
            pos2 = toDoList.children.length;

        updatePosition(pos1,pos2);
    }

    function downButtonClickListener(e) {
        console.log("downButtonClickListener");
        let pos1 = $(this).index();
        pos1 = $(this).parent().index();
        let pos2 = pos1 + 1;
        if (pos2 == toDoList.children.length+1)
            pos2 = 0;
        updatePosition(pos1,pos2);
    }

    function updatePosition(pos1,pos2) {
        let currentVal = toDoList.find('li').eq(pos1).attr("itemid");
        let otherVal = toDoList.find('li').eq(pos2).attr("itemid");

        console.log("pos1 " + pos1 + " pos2 " + pos2 + " currentVal " + currentVal + " otherval " + otherVal);

        $.post('/moveUp',
            {
                val1: currentVal,
                val2: otherVal,
                pos1: pos1,
                pos2: pos2
            },
            function (response) {
                if (response.success)
                    refreshToDos();
                else
                    console.log("Error msg is " + response.errorMsg);
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
                console.log("Server response on add toDo " + response.success);
                if (response.success)
                    refreshToDos();
                else
                    console.log("Error msg is " + response.errorMsg);
            })
    })
})