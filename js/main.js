let btn = document.getElementById('btn');

window.onscroll = function(){
    if(scrollY >=400){
        btn.style.display = 'block'
    }
    else{
        btn.style.display = 'none'
    }
}

btn.onclick = function (){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });