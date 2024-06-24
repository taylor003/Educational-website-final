let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onlick = () =>{
 menuBtn.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}



var swiper = new Swiper(".topic-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 60,
        stretch: 10,
        depth: 100,
        modifier: 1.3,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },

      breakpoints: {
  450:{
   slidesPerView: 1,
  },
  640: {
   slidesPerView: 2,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
 },
    });
