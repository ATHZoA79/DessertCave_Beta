
const body = document.querySelector('body');
const main = document.querySelector('main');
const TOTOP = document.querySelector('#back_to_top');
const FOOTER = document.querySelector('footer');

console.log(window.innerHeight, window.scrollY, body.clientHeight, main.clientHeight, FOOTER.clientHeight);
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    TOTOP.style = 'display: none;';
  }else if (window.scrollY < body.clientHeight-FOOTER.clientHeight-window.innerHeight) {
    TOTOP.style = 'position: fixed; right: 53px; bottom: 40px;';
  }else if (window.scrollY > body.clientHeight-FOOTER.clientHeight-window.innerHeight) {
    TOTOP.style = 'position: absolute; right: 53px; bottom: 40px;';
  }
});