//index.js
//swiper 활성화
const heroSLide = new Swiper('.hero',{
    loop: true,
    direction:'horizontal',
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    navigation: {
        prevEl: '.image_banner_prev',
        nextEl: '.image_banner_next',
    },
    pagination:{
        el: '.image_banner_page',
    }
})