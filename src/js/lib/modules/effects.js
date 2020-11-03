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
        this[i].style.display = display || 'block';

        const _fadeIn = completion => {
            this[i].style.opacity = completion;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = completion => {
            this[i].style.opacity = 1 - completion;

            if (completion === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }
    return this;
};