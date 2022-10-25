var productCard = document.querySelectorAll('.product-card');
var porduct_detail = document.querySelector('.product-detail-area');
var product_detail_close = document.querySelector('.product-detail-close');
var product_detail_opacity = document.querySelector('.product-detail-opacity');


productCard.forEach(element => {
    element.addEventListener('click', function show_detail() {
        porduct_detail.classList.toggle('block-display')
    })
});
product_detail_close.addEventListener('click', close_detail);

product_detail_opacity.addEventListener('click', close_detail);




//--function
function close_detail() {
    porduct_detail.classList.toggle('block-display');
    // event.stopPropagation();
}
//--End of function
