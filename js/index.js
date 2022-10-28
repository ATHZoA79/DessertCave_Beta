const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const LOGO = document.querySelector('#nav-logo');
const PAGI = document.querySelector('.pagination>.content');
const BANNER = document.querySelector('#banner');
const SHOWCASE = document.querySelector('#showcase');

var currentTop = 0;

window.addEventListener('scroll', () => {
  // console.log(body.scrollTop, currentTop, window.scrollY);
  if (window.scrollY < 830) {
    header.classList.remove('header-hide');
    header.classList.remove('header-show');
    LOGO.classList.remove('logo-hide');
    PAGI.classList.remove('pagination-span');
  }else if (window.scrollY > currentTop) {
    header.classList.remove('header-show');
    header.classList.add('header-hide');
    LOGO.classList.add('logo-hide');
    PAGI.classList.add('pagination-span');
  }else if (window.scrollY < currentTop) {
    header.classList.remove('header-hide');
    header.classList.add('header-show');
    LOGO.classList.remove('logo-hide');
    PAGI.classList.add('pagination-span');
  }
  currentTop = window.scrollY;
});

// JH 2022/10/28 

const menubox = document.querySelector('#menu_all');
const menuList = document.querySelector('.menu-1');
const downLine = window.getComputedStyle(menu_all, '::after');
const areaX = document.querySelector('.close-area');

console.log(menubox, areaX, menuList, downLine);

menubox.addEventListener('click', function () {
  console.log('click');
  menuList.classList.add('menu-show');
});
areaX.addEventListener('click', function () {
  menuList.classList.remove('menu-show');
});