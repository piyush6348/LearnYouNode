
$(function () {
    console.log("HTML attached");

    $('.clk').click(function () {
        let clickedProdID = $(this).parent().parent().parent().parent().attr('id');
        addProductToCart(clickedProdID)
    })
    function addProductToCart(prodID) {
        $.post('/cart/add',{
            prodID:prodID
        },function (response) {
            if(response.success)
                console.log("Product added to Cart");
            else
                console.log("Product cannot be added to Cart");
        });
    }
})