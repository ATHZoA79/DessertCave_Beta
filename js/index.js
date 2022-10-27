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