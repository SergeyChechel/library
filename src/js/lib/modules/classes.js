import $ from '../core';

$.prototype.addClass = function(...classNames) {

    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }
    return this;
}; 

$.prototype.removeClass = function(...classNames) {
    
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    }
    return this;
}; 

$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }
    return this;
}; 

$.prototype.hasClass = function(className) {
    let flag = false;
    for (let i = 0; i < this.length; i++) {
        this[i].classList.forEach(element => {
            if (element == className) {
                flag = true;
            }
        });
        if (flag) {break} 
    }
    return flag;
}; 