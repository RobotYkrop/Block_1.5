document.addEventListener("DOMContentLoaded", () => {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

function swiperMode() {
    
if(mobile.matches) {
        const swiper = new Swiper(".mySwiper", {
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

})}
// Disable (for tablet)
else if(tablet.matches) {
    swiper.destroy
    
}

// Disable (for desktop)
else if(desktop.matches) {
    swiper.destroy
    
}
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
swiperMode();
});

});

