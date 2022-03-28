document.addEventListener("DOMContentLoaded", () => {
  const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

function swiperMode() {


if(mobile.matches) {
    swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {

            320: {
                slidesPerView: 2,
                spaceBetween: 13
            },

            480: {
                slidesPerView: 3,
                spaceBetween: 23
            },

            640: {
                slidesPerView: 4,
                spaceBetween: 33
            },
        },

    })
        }
}
/* On Load
**************************************************************/
window.addEventListener('load', function() {
swiperMode();
});

});

