let swiper = Swiper;
let init = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

if(mobile.matches) {
    if (!init) {
        init = true;
        swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        
      },
        breakpoints: {
        
320: {
  slidesPerView: 2,
  spaceBetween: 20
},

480: {
  slidesPerView: 3,
  spaceBetween: 30
},

640: {
  slidesPerView: 4,
  spaceBetween: 40
},
},

})}}
// Disable (for tablet)
else if(tablet.matches) {
    swiper.destroy()
    init = false;
}

// Disable (for desktop)
else if(desktop.matches) {
    swiper.destroy()
    init = false;
}
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
swiperMode();
});