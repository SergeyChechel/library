import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / dur, 1);

        cb(completion);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};



$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        runInAnimation (this[i], this, dur, display, fin)
    }
    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        runOutAnimation (this[i], this, dur, fin)
    }
    return this;
}

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            runInAnimation (this[i], this, dur, display, fin)
        } else {
            runOutAnimation (this[i], this, dur, fin)
        }
    }
    return this;
};

function runInAnimation (el, obj, dur, display, fin) {

    el.style.display = display || 'block';
    const _fadeIn = completion => {
        el.style.opacity = completion;
    };
    const ani = obj.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
}

function runOutAnimation (el, obj, dur, fin) {

    const _fadeOut = completion => {
        el.style.opacity = 1 - completion;
        if (completion === 1) {
            el.style.display = 'none';
        }
    };
    const ani = obj.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
}
