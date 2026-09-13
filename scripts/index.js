//index.js
//swiper 활성화
const heroSLide = new Swiper('.hero',{
    loop: true,
    direction:'horizontal',
    autoplay:{
        delay:6000,
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

//해당 스크롤에 도착 시 딱 한 번 애니메이션을 진행하고 새로고침 전까지 작동 안함.
//브랜드 슬로건 영역에 도착시 브랜드 슬로건 애니메이션 실행
let animation = false; // 실행안함
const brand_slogan = document.querySelector('.brand_slogan');
//
window.addEventListener('scroll', ()=>{
    if(scrollY > 10 &&  animation == false){
        brand_slogan.classList.add('active');
        animation = true;
    }
})
