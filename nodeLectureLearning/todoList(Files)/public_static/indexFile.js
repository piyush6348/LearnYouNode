
function getList(response) {
    response = response.split(",");
    response = response.slice(1);
    var temp="";
    for(task of response){
        temp +=`<li>${task}</li>`
        temp+='\n';
    }
    return temp;
}
$(function () {
    let toDoList = $("#toDoList")
    $.get('/pageloaded',function (response) {
        console.log("Response of page load request received "+response);
        toDoList.empty();
        toDoList.append(getList(response));
    })

    $("#addToDo").click(function () {
        let newToDo = $('#newToDo').val();

        $.get('/addNewToDo'+"?task="+newToDo,function (response) {
            toDoList.empty();
            toDoList.append(getList(response));
        })
    })
})