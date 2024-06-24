let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

 function showSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'flex'
  }

  function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
  }


var swiper = new Swiper(".course-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  200:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  300:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  450:{
   slidesPerView: 1,
   spacebetween: 2,
  },
  640: {
   slidesPerView: 2,
   spacebetween: 2,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});


var swiper = new Swiper(".teachers-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  200:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  300:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  450:{
   slidesPerView: 1,
   spacebetween: 3,
  },
  640: {
   slidesPerView: 2,
   spacebetween: 2,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});


var swiper = new Swiper(".reviews-slider", {
 slidesPerView: 20,
 grabCursor: true,
 loop: true,
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
 breakpoints: {
  200:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  300:{
   slidesPerView: 1,
   spacebetween: 0.5,
  },
  450:{
   slidesPerView: 1,
   spacebetween: 2,
  },
  640: {
   slidesPerView: 2,
   spacebetween: 2,
  },
  768: {
   slidesPerView: 2,
   spacebetween: 4,
  },
  1024: {
   slidesPerView: 3,
   spacebetween: 5,
  },
 },
});
