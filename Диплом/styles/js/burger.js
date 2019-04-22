var hamburger = document.querySelector('.js-hb');
var navjs = document.querySelector('.header-bottom__middle');

hamburger.addEventListener('click', function () {
    navjs.classList.toggle('active');
    hamburger.classList.toggle('active');
})