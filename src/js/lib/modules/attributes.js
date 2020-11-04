import $ from '../core';

$.prototype.attr = function(name, value = null) {
    for (let i = 0; i < this.length; i++) {
        if (value || value === '') {
            this[i].setAttribute(name, value);
        } else {
            return this[i].getAttribute(name);
        }
    }
    return this;
}; 

$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
}; 

$.prototype.toggleAttr = function(name, value = '') {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
}; 