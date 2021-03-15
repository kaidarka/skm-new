const burger = document.getElementById('header__burger');
const menu = document.getElementById('header__menu');
const body = document.body;
const products = document.getElementsByClassName('products');
const buttonLoadProducts = document.querySelector('#load-products')


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})
let countLoad = 4;
buttonLoadProducts.addEventListener('click', () => {
    if(products.length >= countLoad+4){
        products[countLoad].classList.remove('d-none');
        products[countLoad+1].classList.remove('d-none');
        products[countLoad+2].classList.remove('d-none');
        products[countLoad+3].classList.remove('d-none');
        countLoad += 4;
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.arrow-button-next',
              prevEl: '.arrow-button-prev',
            },
        });
    }else if(products.length >= countLoad+3){
        products[countLoad].classList.remove('d-none');
        products[countLoad+1].classList.remove('d-none');
        products[countLoad+2].classList.remove('d-none');
        countLoad += 3;
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.arrow-button-next',
              prevEl: '.arrow-button-prev',
            },
        });
    }else if(products.length >= countLoad+2){
        products[countLoad].classList.remove('d-none');
        products[countLoad+1].classList.remove('d-none');
        countLoad += 2;
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.arrow-button-next',
              prevEl: '.arrow-button-prev',
            },
        });
    }else if(products.length >= countLoad+1){
        products[countLoad].classList.remove('d-none');
        countLoad += 1;
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
              nextEl: '.arrow-button-next',
              prevEl: '.arrow-button-prev',
            },
        });
    }
})