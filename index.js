// Первый слайдер, обычный
const swiper = new Swiper('.mySwiper', {
    loop: true, // Бесконечная прокрутка
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Второй слайдер, как обычный, но добавлен эффект затухания
const swiperTwo = new Swiper('.mySwiper--two', {
    loop: true, // Бесконечная прокрутка
    effect: 'fade', // Эффект затухания
    fadeEffect: {
        crossFade: true, // Плавная анимация перехода
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 700, // Скорость анимации
});

// Третий слайдер, добавлены миниатюры картинок, по которым можно тоже переключаться
const swiperThumbs = new Swiper('.mySwiper-thumbs', {
    loop: true,
    slidesPerView: 2, // Количество миниатюр на экране
    spaceBetween: 3, // Расстояние между миниатюрами
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const swiperThree = new Swiper('.mySwiper--third', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: swiperThumbs,
    },
});