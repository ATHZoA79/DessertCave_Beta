
var product_card = document.querySelectorAll('.product-card');
var product_card_area = document.querySelector('.product-card-area');
var porduct_detail = document.querySelector('.product-detail-area');
var product_detail_close = document.querySelector('.product-detail-close');
var product_detail_opacity = document.querySelector('.product-detail-opacity');
var product_sheet = document.querySelectorAll('.product-series');


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
                    <img src="./img/product/product_list/綜合堅果類/提拉米蘇.png" data-sheet="nut" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>提拉米蘇</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/綜合堅果類/蜂蜜太妃核果塔.png" data-sheet="nut" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>橙蜂蜜太妃核果塔</h3>
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

        else if (product_sheet[2].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/濃郁抹茶系列/萬丹卡士達抹茶紅豆塔.png" data-sheet="matcha" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>萬丹卡士達抹茶紅豆塔</h3>
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
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`

        }

        else if (product_sheet[3].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/菓洞鮮果系列/生乳酪蘋果蛋糕.png" data-sheet="fruit" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>生乳酪蘋果蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/菓洞鮮果系列/香草荔葡萄夏洛特.png" data-sheet="fruit" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>香草荔葡萄夏洛特</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/菓洞鮮果系列/義式奶油檸檬塔.png" data-sheet="fruit" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>義式奶油檸檬塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/菓洞鮮果系列/綠葡萄檸檬乳酪.png" data-sheet="fruit" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>綠葡萄檸檬乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/菓洞鮮果系列/藍莓乳酪塔.png" data-sheet="fruit" alt="空產品">
                    </div>
                <div class="product-name">
                    <h3>藍莓乳酪塔</h3>
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
        else if (product_sheet[4].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/常溫蛋糕系列/周末檸檬磅蛋糕.png" data-sheet="normal_degree" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>周末檸檬磅蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/常溫蛋糕系列/黃金果仁費南雪.png" data-sheet="normal_degree" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>黃金果仁費南雪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/常溫蛋糕系列/蜂蜜檸檬瑪德蓮.png" data-sheet="normal_degree" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>蜂蜜檸檬瑪德蓮</h3>
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
        else if (product_sheet[5].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/Sesame Sesame.png" data-sheet="other" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>Sesame Sesame</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/巴斯克乳酪.png" data-sheet="other" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>巴斯克乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/比利時巧克力慕斯蛋糕.png" data-sheet="other" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>比利時巧克力慕斯蛋糕</h3>
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



//--product detail
product_card.forEach(card => {
    card.addEventListener('click', function show_detail() {
        porduct_detail.classList.toggle('block-display')
    })
});
product_detail_close.addEventListener('click', close_detail);
product_detail_opacity.addEventListener('click', close_detail);
//--End of product detail




//--


//--function
function close_detail() {
    porduct_detail.classList.toggle('block-display');
}


function sheet_color() {
    product_sheet.cla
}

//--End of function







