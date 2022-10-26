
var product_card = document.querySelectorAll('.product-card');
var product_card_area = document.querySelector('.product-card-area');
var porduct_detail = document.querySelector('.product-detail-area');
var product_detail_close = document.querySelector('.product-detail-close');
var product_detail_opacity = document.querySelector('.product-detail-opacity');
var product_sheet = document.querySelectorAll('.product-series');


//--product detail
product_card.forEach(card => {
    card.addEventListener('click', function show_detail() {
        porduct_detail.classList.toggle('block-display')
    })
});
product_detail_close.addEventListener('click', close_detail);
product_detail_opacity.addEventListener('click', close_detail);
//--End of product detail


//--product sheet
product_sheet.forEach(sheet => {
    sheet.addEventListener('click', function () {

        //--product sheet color
        product_sheet.forEach(element => {
            element.classList.remove('bg-pink');
        });
        sheet.classList.add('bg-pink');
        //--End of product sheet color

        //--product card change

        if (product_sheet[0].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/甜蜜巧克力系列/焦糖榛果生巧克力塔.png" data-sheet="chocolate" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>焦糖榛果生巧克力塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/甜蜜巧克力系列/橙香法芙娜生巧塔.png" data-sheet="chocolate" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>橙香法芙娜生巧塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`

        }
        else if (product_sheet[1].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/甜蜜巧克力系列/焦糖榛果生巧克力塔.png" data-sheet="chocolate" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>焦糖榛果生巧克力塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/甜蜜巧克力系列/橙香法芙娜生巧塔.png" data-sheet="chocolate" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>橙香法芙娜生巧塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`

        }


    })
});
//--End of product sheet








//--


//--function
function close_detail() {
    porduct_detail.classList.toggle('block-display');
}


function sheet_color() {
    product_sheet.cla
}

//--End of function







