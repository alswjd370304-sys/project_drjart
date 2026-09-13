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

//변수
//1행 변수
const brand_slogan = document.querySelector('.brand_slogan');
//3행 변수
const swiperWrapper = document.querySelector('.best_product_swiper .swiper-wrapper'); //붙여넣기할 대상


//------------------------------------------------------------------------------1행 swiper
//해당 스크롤에 도착 시 딱 한 번 애니메이션을 진행하고 새로고침 전까지 작동 안함.
//브랜드 슬로건 영역에 도착시 브랜드 슬로건 애니메이션 실행
let animation = false; // 실행안함
//
window.addEventListener('scroll', ()=>{
    if(scrollY > 10 &&  animation == false){
        brand_slogan.classList.add('active');
        animation = true;
    }
})

//------------------------------------------------------------------------------2행 swiper
const bestSlide = new Swiper('.best_product_swiper',{
    slidesPerView:4,
    spaceBetween:19,
        navigation: {
        prevEl: '.best_prev',
        nextEl: '.best_next',
    },
}) //swiper 실행

for(let i=0; i<=5; i++){
    const bestSlideDiv = document.createElement('div');
    bestSlideDiv.classList.add('swiper-slide');

    bestSlideDiv.innerHTML = `<a href="#" class="best_product_img${bestDB[i].id}"></a>`
    bestSlideDiv.innerHTML += `<div class="product_name">
    <p class="name">${bestDB[i].name}</p>
    <p class="sub_txt">${bestDB[i].sub_txt}</p>
    </div>`
    bestSlideDiv.innerHTML += `<p class="price">${bestDB[i].price}</p>`
    bestSlideDiv.innerHTML += `<p class="cart"><button type="button" class="cart_btn">장바구니</button></p>`

    swiperWrapper.appendChild(bestSlideDiv); //붙여넣기
}