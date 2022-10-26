

var product_card_area = document.querySelector('.product-card-area');
var product_detail = document.querySelector('.product-detail-area');
var product_detail_close = document.querySelector('.product-detail-close');
var product_detail_opacity = document.querySelector('.product-detail-opacity');
var product_sheet = document.querySelectorAll('.product-series');

//--first product detail
var product_card = document.querySelectorAll('.product-card');
product_card.forEach(card => {
    card.addEventListener('click', function show_detail() {
        product_detail.classList.toggle('block-display');
        product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
        var product_detail_close = document.querySelector('.product-detail-close');
        var product_detail_opacity = document.querySelector('.product-detail-opacity');

        product_detail_close.addEventListener('click', close_detail);
        product_detail_opacity.addEventListener('click', close_detail);
    })

});

//--End of first product detail



//--product detail
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
                    <img src="./img/product/product_list/chocolate/hazelnut.png" data-product="hazelnut" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>焦糖榛果生巧克力塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/chocolate/fafna2.png" data-product="fafna2" alt="空產品"> 
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
            var product_card = document.querySelectorAll('.product-card');

            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    var product_detail = document.querySelector('.product-detail-area');
                    product_detail.classList.toggle('block-display');


                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })



            });


        }

        else if (product_sheet[1].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/nut/Tiramisu.png" data-product="Tiramisu" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>提拉米蘇</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/nut/honeydrupe.png" data-product="honeydrupe" alt="空產品">
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
            var product_card = document.querySelectorAll('.product-card');
            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    product_detail.classList.toggle('block-display');

                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })

            });

        }

        else if (product_sheet[2].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/matcha/redbeans.png" data-product="redbeans" alt="空產品">
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
            var product_card = document.querySelectorAll('.product-card');
            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    product_detail.classList.toggle('block-display');
                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })

            });
        }

        else if (product_sheet[3].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/furit/apple.png" data-product="apple" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>生乳酪蘋果蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/charlotte2.png" data-product="charlotte2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>香草荔葡萄夏洛特</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/lemon3.png" data-product="lemon3" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>義式奶油檸檬塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/grapelemon.png" data-product="grapelemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>綠葡萄檸檬乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/blueberry.png" data-product="blueberry" alt="空產品">
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
            var product_card = document.querySelectorAll('.product-card');
            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    product_detail.classList.toggle('block-display');
                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })

            });
        }
        else if (product_sheet[4].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/saturdaylemon.png" data-product="saturdaylemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>周末檸檬磅蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/financier.png" data-product="financier" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>黃金果仁費南雪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/madeleine.png" data-product="madeleine" alt="空產品">
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
            var product_card = document.querySelectorAll('.product-card');
            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    product_detail.classList.toggle('block-display');
                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })

            });
        }
        else if (product_sheet[5].classList.contains('bg-pink')) {

            product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/sesame.png" data-product="sesame" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>Sesame Sesame</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/cheesecake2.png" data-product="cheesecake2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>巴斯克乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/belgium.png" data-product="belgium" alt="空產品">
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
            var product_card = document.querySelectorAll('.product-card');
            product_card.forEach(card => {
                card.addEventListener('click', function show_detail() {
                    product_detail.classList.toggle('block-display');
                    product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${card.querySelector('.img-container>img').dataset.product}-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${card.querySelector('.product-name>h3').innerText}</div>
                          <div class="product-detail-content"></div>
                        </div>
                        <div class="product-detail-button"><a href="https://zh-tw.facebook.com/dessertcave0725/"
                            target="_blank">了解更多...</a></div>
                      </div>
                    ` ;
                    var product_detail_close = document.querySelector('.product-detail-close');
                    var product_detail_opacity = document.querySelector('.product-detail-opacity');

                    product_detail_close.addEventListener('click', close_detail);
                    product_detail_opacity.addEventListener('click', close_detail);
                })

            });
        }
        //--End of product card change
    })
});
//--End of product detail



//--function
function close_detail() {
    product_detail.classList.toggle('block-display');

}

//--End of function







