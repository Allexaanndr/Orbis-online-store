const lineSlider = function (ssliderBody, ssliderLine, ssliderSlides, ssliderDots, ssliderNav) {
    const sliderBody = document.querySelector(ssliderBody),
        sliderLine = sliderBody.querySelector(ssliderBody + ssliderLine),
        sliderSlides = sliderBody.querySelectorAll(ssliderBody + ssliderSlides),
        sliderNav = document.querySelector(ssliderBody + ssliderNav),
        sliderSpan = sliderNav.querySelector('span'),
        sliderDots = document.querySelectorAll(ssliderBody + ssliderDots);

    let width, count = 0, x1, xDiff;

    function init() {
        width = sliderBody.offsetWidth;
        sliderLine.style.width = width * sliderSlides.length + 'px';
        sliderSpan.style.width = (100 / sliderSlides.length / 100) * sliderNav.offsetWidth + 'px';
    }

    window.addEventListener('resize', init);
    init();

    function prevSlide() {
        count--;
        if (count < 0) count = sliderSlides.length - 1;

        rollSLider(count);
        moveBlueLine(count);
    }

    function nextSlide() {
        count++;
        if (count == sliderSlides.length) count = 0;

        rollSLider(count);
        moveBlueLine(count);
    }

    if (ssliderNav) {
        sliderNav.addEventListener('click', ChooseSlides);

        function ChooseSlides(e) {
            let currentCoord = e.offsetX;
            let pos = sliderSpan.offsetWidth;

            if (sliderSpan != e.target) {
                for (let i = 0; i <= sliderSlides.length; i++) {
                    if (currentCoord < pos * i) {
                        count = i - 1;
                        break;
                    }
                }
            }


            prevSlide();
            nextSlide();
        }

        function moveBlueLine(count) {
            sliderSpan.style.marginLeft = sliderSpan.offsetWidth * count + 'px';
        }

    } else if (ssliderDots) {
        function thisSlide(index) {
            sliderDots.forEach(item => {item.classList.remove('active-dot')});
            sliderDots[index].classList.add('active-dot');
        }

        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                count = index;
                rollSlider();
                thisSlide(count);
            })
        });
    }


    sliderBody.addEventListener('pointerdown', handlePointerStart);
    sliderBody.addEventListener('pointermove', handlePointerMove);

    function handlePointerStart(e) {
        x1 = e.clientX;
    }

    function handlePointerMove(e) {
        if (!x1) {
            return false
        }

        let x2 = e.clientX;
        xDiff = x2 - x1;

        if (xDiff < 0) {
            nextSlide();
        } else if (xDiff > 0) {
            prevSlide();
        }

        x1 = null;
    }

    function rollSLider(count) {
        sliderLine.style.transform = `translateX(-${count * (sliderSlides[0].offsetWidth + parseInt(window.getComputedStyle(sliderLine).columnGap))}px)`;
    }

}

if (document.querySelector('.ingredienti-slider')) {
    lineSlider('.ingredienti-slider', '__line', '__slide', false, '__nav');
} else if (document.querySelector('.perche-slider')) {
    lineSlider('.perche-slider', '__line', '__slide', false, '__nav');
}

const dotSlider = function (ssliderBody, ssliderLine, ssliderSlides, ssliderDots, ssliderArrows) {
    const sliderBody = document.querySelector(ssliderBody),
        sliderLine = sliderBody.querySelector(ssliderBody + ssliderLine),
        sliderSlides = sliderBody.querySelectorAll(ssliderBody + ssliderSlides),
        sliderDots = document.querySelectorAll(ssliderBody + ssliderDots),
        sliderArrows = document.querySelectorAll(ssliderBody + ssliderArrows);

    let width, count = 0, x1, xDiff;

    function init() {
        width = sliderBody.offsetWidth;
        sliderLine.style.width = (width * sliderSlides.length) + 'px';
    }


    window.addEventListener('resize', init);
    init();

    if(sliderArrows.length !== 0) {
        sliderArrows[0].addEventListener('click', prevSlide);
        sliderArrows[1].addEventListener('click', nextSlide);
    }

    function prevSlide() {
        count--;
        if (count < 0) count = sliderSlides.length - 1;

        rollSLider(count);
        thisSlide(count);
    }

    function nextSlide() {
        count++;
        if (count >= sliderSlides.length) count = 0;

        rollSLider(count);
        thisSlide(count);
    }

    function thisSlide(index) {
        sliderDots.forEach(item => item.classList.remove('active-dot'));
        sliderDots[index].classList.add('active-dot');
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            count = index;
            thisSlide(count);
            rollSLider(count);
        })
    });

    sliderBody.addEventListener('pointerdown', handlePointerStart);
    sliderBody.addEventListener('pointermove', handlePointerMove);

    function handlePointerStart(e) {
        x1 = e.clientX;
    }

    function handlePointerMove(e) {
        if (!x1) {
            return false
        }

        let x2 = e.clientX;
        xDiff = x2 - x1;

        if (xDiff < 0) {
            nextSlide();
        } else if (xDiff > 0) {
            prevSlide();
        }

        x1 = null;
    }

    function rollSLider(count) {
        sliderLine.style.transform = `translateX(-${count * (sliderSlides[0].offsetWidth + parseInt(window.getComputedStyle(sliderLine).columnGap))}px)`;
    }

}

if (document.querySelector('.blog-slider')) {
    dotSlider('.blog-slider', '__line', '__wrapper', '__dot', false);
} else if (document.querySelector('.fondatori-slider')) {
    dotSlider('.fondatori-slider', '__line', '__slide', '__dot', '__arrow');
} else if(document.querySelector('.product-slider')) {
    dotSlider('.product-slider', '__line', '__slide', '__dot', '__arrow')
}

