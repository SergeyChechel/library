import $ from '../core';

// с наличием верстки в index.html

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');


        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('.carousel-next')).on('click', (e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/ig, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += (+width.replace(/\D/ig, ''));
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('.carousel-prev')).on('click', (e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/ig, '') * (slides.length - 1);
            } else {
                offset -= (+width.replace(/\D/ig, ''));
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.replace(/\D/ig, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    
    }

};

$('.carousel').carousel();




// верстка создается в скрипте и вставляется на страницу (в div.carousel), иницаилизация слайдера в файле main.js

// $.prototype.createCarousel = function({imgs} = {}) {

//     for (let i = 0; i < this.length; i++) {

//         let lis = '', 
//             items = '';

//         for (let j = 0; j < imgs.length; j++) {
//             lis += `<li ${ j == 0 ? 'class="active"' : ''} data-slide-to="${j}"></li>`;
//             items += `<div class="carousel-item">
//                         <img src=${imgs[j]} alt="photo">
//                     </div>`;
//         }
        
//         this[i].innerHTML = `
//             <ol class="carousel-indicators">${lis}</ol>
//             <div class="carousel-inner">
//                 <div class="carousel-slides">${items}</div>
//             </div>
//             <a href="#" class="carousel-prev" data-slide="prev">
//                 <span class="carousel-prev-icon">&lt;</span>
//             </a>
//             <a href="#" class="carousel-next" data-slide="next">
//                 <span class="carousel-prev-icon">&gt;</span>
//             </a>
//         `;

//         const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
//         const slides = this[i].querySelectorAll('.carousel-item');
//         const slidesField = this[i].querySelector('.carousel-slides');
//         const dots = this[i].querySelectorAll('.carousel-indicators li');


//         slidesField.style.width = 100 * slides.length + '%';
//         slides.forEach(slide => {
//             slide.style.width = width;
//         });

//         let offset = 0;
//         let slideIndex = 0;

//         $(this[i].querySelector('.carousel-next')).on('click', (e) => {
//             e.preventDefault();
//             if (offset == (+width.replace(/\D/ig, '') * (slides.length - 1))) {
//                 offset = 0;
//             } else {
//                 offset += (+width.replace(/\D/ig, ''));
//             }
//             slidesField.style.transform = `translateX(-${offset}px)`;
//             if (slideIndex == slides.length - 1) {
//                 slideIndex = 0;
//             } else {
//                 slideIndex++;
//             }
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         });

//         $(this[i].querySelector('.carousel-prev')).on('click', (e) => {
//             e.preventDefault();
//             if (offset == 0) {
//                 offset = +width.replace(/\D/ig, '') * (slides.length - 1);
//             } else {
//                 offset -= (+width.replace(/\D/ig, ''));
//             }
//             slidesField.style.transform = `translateX(-${offset}px)`;
//             if (slideIndex == 0) {
//                 slideIndex = slides.length - 1;
//             } else {
//                 slideIndex--;
//             }
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         });

//         const sliderId = this[i].getAttribute('id');
//         $(`#${sliderId} .carousel-indicators`).click(e => {
//             const slideTo = e.target.getAttribute('data-slide-to');
//             slideIndex = slideTo;
//             offset = +width.replace(/\D/ig, '') * slideTo;

//             slidesField.style.transform = `translateX(-${offset}px)`;
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         });

//     }

// };