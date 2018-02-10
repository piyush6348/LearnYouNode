
$(function () {
    let tBody = $('#tbody');

    updateTable();

    $('.navbar').click(function () {
        //$(this).load("./index.html")
        window.location = "index.html";
    })

    function getTableElement(transaction,index) {
        return `
                <tr>
                    <th scope="row">${index+1}</th>
                    <th>${transaction.productMaster.pName}</th>
                    <th>${transaction.productMaster.pPrice}</th>
                    <th>${transaction.qty}</th>
                    <th>${transaction.productMaster.pPrice*transaction.qty}</th>
                </tr>`;
    }
    function updateTable() {
        $.get('/cart/allTransactions',(response)=>{

            if(response.success){
                let listOfTransactions = response.transactions;

                listOfTransactions.forEach((value,index,array)=>{
                    tBody.append(getTableElement(value,index));
                })
            }
            else{
                console.log(response.error);
            }
        })
    }
})