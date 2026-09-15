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

//변수정리
//1행 변수
const brand_slogan = document.querySelector('.brand_slogan');
//3행 변수
const swiperWrapper = document.querySelector('.best_product_swiper .swiper-wrapper'); //붙여넣기할 대상
/* 메뉴 변수 */
const totalMenu = document.querySelector('#total_menu'); //전체메뉴부모
const menuOverlay = document.querySelector('.menu_overlay'); //메뉴창
const closeBtn = document.querySelector('.close_btn'); //닫기버튼
/* 메뉴탭 변수 */
const menuTab = document.querySelectorAll('.menu_tab');
const menuContent = document.querySelectorAll('.menu_content');


//------------------------------------------------------------------------------2행 swiper
//해당 스크롤에 도착 시 딱 한 번 애니메이션을 진행하고 새로고침 전까지 작동 안함.
//브랜드 슬로건 영역에 도착시 브랜드 슬로건 애니메이션 실행
let animation = false; // 실행안함
//
window.addEventListener('scroll', ()=>{
    if(scrollY > 100 &&  animation == false){
        brand_slogan.classList.add('active');
        animation = true;
    }
})

//------------------------------------------------------------------------------3행 swiper
const bestSlide = new Swiper('.best_product_swiper',{
    slidesPerView:4,
    spaceBetween:19,
    navigation: {
        prevEl: '.best_prev',
        nextEl: '.best_next',
    },
    breakpoints: {
        1401: {
            slidesPerView: 4,
            spaceBetween: 19,
        },
        901: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
    scrollbar: {
        el: '.best_scrollbar',
    },
}) //swiper 실행


for(let i=0; i<=5; i++){
    const bestSlideDiv = document.createElement('div');
    bestSlideDiv.classList.add('swiper-slide');

    bestSlideDiv.innerHTML = `
        <a href="#" class="best_product_link">

            <div class="best_product_img${bestDB[i].id}"></div>

            <div class="product_name">
                <p class="name">${bestDB[i].name}</p>
                <p class="sub_txt">${bestDB[i].sub_txt}</p>
            </div>

            <p class="price">${bestDB[i].price}</p>

        </a>

        <p class="cart">
            <button type="button" class="cart_btn">장바구니</button>
        </p>
    `

    swiperWrapper.appendChild(bestSlideDiv);
}

//------------------------------------------------------------------------------4행 swiper

//swiper 실행
const skinSwiper = new Swiper('.skin_solution_swiper', {
    loop: true,

    effect: 'fade',

    speed: 500,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: '.skin_prev',
        nextEl: '.skin_next',
    },
    pagination:{
        el: '.skin_page',
    }
})

//------------------------------------------------------------------------------메뉴 활성화
/* 전체메뉴 눌렀을 때 메뉴창 열기 - 닫기 버튼을 눌렀을 때 닫히기 */

//전체메뉴를 눌렀을 때 열리기 (active 클래스 넣기)
totalMenu.addEventListener('click', ()=>{
    menuOverlay.classList.add('active');
})
//닫기 버튼 눌렀을 때 메뉴 닫히기 (클래스 빼기)
closeBtn.addEventListener('click', ()=>{
    menuOverlay.classList.remove('active')
})
//메뉴 오버레이를 클릭 했을 때 메뉴 닫히기 (클래스 빼기)
menuOverlay.addEventListener('click', (e)=>{
    if(e.target === menuOverlay){
        menuOverlay.classList.remove('active');
    }
})

//탭 메뉴를 눌렀을 때 해당 메뉴의 내용 보이도록 하기
menuTab[0].addEventListener('click', ()=>{
    menuTab[0].classList.add('active');
    menuTab[2].classList.remove('active');

    menuContent[0].classList.add('active');
    menuContent[1].classList.remove('active');
});

menuTab[2].addEventListener('click', function() {

    menuTab[0].classList.remove('active');
    menuTab[2].classList.add('active');

    menuContent[0].classList.remove('active');
    menuContent[1].classList.add('active');

});