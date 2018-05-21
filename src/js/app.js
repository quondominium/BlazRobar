// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
var mySwiper = new Swiper ('.swiper-container', {
navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
});
function listen() {
var HAMBURGER_ACTIVE = 'is-active';
var NAVIGATION_OPENED = 'is-navigation-opened';
var MOBILE_RESOLUTION = 640;

var body = document.querySelector('body');
var btnHamburger = document.querySelector('.btn-hamburger');
btnHamburger.addEventListener('click', function () {
  btnHamburger.classList.toggle(HAMBURGER_ACTIVE);
  body.classList.toggle(NAVIGATION_OPENED);
});

window.addEventListener('resize', function(){
  if(window.innerWidth > MOBILE_RESOLUTION){
    btnHamburger.classList.remove(HAMBURGER_ACTIVE);
    body.classList.remove(NAVIGATION_OPENED);       
  }
});
}

listen();

$(document).ready(function() {
$('.modal').lightGallery ({
		selector: '.modal-item',
		thumbnail:false,
		zoom:false,
		download:false
});
});	

