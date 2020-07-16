//************CONTACT FORM ACCORDION***************
const acc = document.getElementsByClassName("contact-item-form-accordion-btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        let target = event.target;
        target.classList.toggle("contact-item-form-accordion-btn-active");
        let panel = this.parentNode.nextElementSibling;
        if (panel.style.visibility === "visible") {
            panel.style.visibility = "hidden";
            panel.style.opacity ="0" ;
            panel.style.width ="0";
            panel.style.height ="0" ;
            panel.style.transitionDuration = "1s";   
            panel.style.transitionProperty ="visibility"; 
        } else {
            //STYLES FOR ACTIVE PANEL
            panel.style.visibility = "visible";
            panel.style.opacity ="1" ;
            panel.style.width ="100%";
            panel.style.height ="100%" ;
            panel.style.transitionDuration = "1s";   
            panel.style.transitionProperty ="visibility";  
                     
        }
    });
}

///***********************MOBILE MENU********************

const hamburger = document.querySelector('.menu-btn-phone');

hamburger.addEventListener('click', (e)=>{
   e.target.closest('.menu-btn-phone').classList.toggle('menu-btn-phone-active');   
   e.target.closest('.header-item').querySelector('.header-item-menu').classList.toggle('header-item-menu-active');
   e.target.closest('.header-item').querySelector('.header-item-btn').classList.toggle('header-item-btn-active');
   e.target.closest('.header-item').querySelector('.line').classList.toggle('line-active');
});

//******************SLIDER*********************************
// Initialize Swiper 
  
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  spaceBetween: 100
});
