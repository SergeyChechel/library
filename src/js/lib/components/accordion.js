import $ from '../core';

$.prototype.accordion = function(headActiveClass = 'accordion-head--active', contentActiveClass = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        const contentBlock = this[i].nextElementSibling;
        
        $(this[i]).on('click', () => {
            $(this[i]).toggleClass(headActiveClass);
            $(contentBlock).toggleClass(contentActiveClass);
            if ($(this[i]).hasClass(headActiveClass)) {
                contentBlock.style.maxHeight = contentBlock.scrollHeight + paddings + 'px';
                contentBlock.style.opacity = 1;
            } else {
                contentBlock.style.maxHeight = 0;
                contentBlock.style.opacity = 0;
            }
        });

        $(contentBlock).on('click', () => {
            contentBlock.style.maxHeight = 0;
            contentBlock.style.opacity = 0;
            $(this[i]).toggleClass(headActiveClass);
        });
    }
};


$('.accordion-head').accordion();