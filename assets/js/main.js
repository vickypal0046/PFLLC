!function(){"use strict";let a=(a,b=!1)=>(a=a.trim(),b)?[...document.querySelectorAll(a)]:document.querySelector(a),b=(d,e,f,c=!1)=>{let b=a(e,c);b&&(c?b.forEach(a=>a.addEventListener(d,f)):b.addEventListener(d,f))},c=(a,b)=>{a.addEventListener("scroll",b)},i=a("#navbar .scrollto",!0),d=()=>{let b=window.scrollY+200;i.forEach(c=>{if(!c.hash)return;let d=a(c.hash);d&&(b>=d.offsetTop&&b<=d.offsetTop+d.offsetHeight?c.classList.add("active"):c.classList.remove("active"))})};window.addEventListener("load",d),c(document,d);let j=d=>{let b=a("#header"),c=b.offsetHeight;b.classList.contains("header-scrolled")||(c-=16);let e=a(d).offsetTop;window.scrollTo({top:e-c,behavior:"smooth"})},g=a("#header");if(g){let e=()=>{window.scrollY>100?g.classList.add("header-scrolled"):g.classList.remove("header-scrolled")};window.addEventListener("load",e),c(document,e)}let h=a(".back-to-top");if(h){let f=()=>{window.scrollY>100?h.classList.add("active"):h.classList.remove("active")};window.addEventListener("load",f),c(document,f)}b("click",".mobile-nav-toggle",function(b){a("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),b("click",".navbar .dropdown > a",function(b){a("#navbar").classList.contains("navbar-mobile")&&(b.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),b("click",".scrollto",function(d){if(a(this.hash)){d.preventDefault();let b=a("#navbar");if(b.classList.contains("navbar-mobile")){b.classList.remove("navbar-mobile");let c=a(".mobile-nav-toggle");c.classList.toggle("bi-list"),c.classList.toggle("bi-x")}j(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&a(window.location.hash)&&j(window.location.hash)});let k=a("#hero-carousel-indicators");a("#heroCarousel .carousel-item",!0).forEach((b,a)=>{0===a?k.innerHTML+="<li data-bs-target='#heroCarousel' data-bs-slide-to='"+a+"' class='active'></li>":k.innerHTML+="<li data-bs-target='#heroCarousel' data-bs-slide-to='"+a+"'></li>"}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}),$(window).on("load",function(){$(".spinner").fadeOut(),$(".preloader").delay(350).fadeOut("slow")})}()