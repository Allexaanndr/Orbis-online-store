if (document.querySelector('.lifestyle-middle__accordion')) {
    const accs = document.querySelectorAll('.lifestyle-middle__accordion'),
        panels = document.querySelectorAll('.lifestyle-middle__panel');

    let i;


    function hideAccordionContent() {
        for (i = 0; i < panels.length; i++) {
            panels[i].style.marginTop = `-${panels[i].offsetHeight}px`;
        }
    }

    hideAccordionContent();

    window.addEventListener('resize', (e) => {
        hideAccordionContent();
    })

    for (i = 0; i < accs.length; i++) {
        accs[i].onclick = function () {

            for (let x = 0; x < panels.length; x++) {
                panels[x].classList.remove('show');
                accs[x].classList.remove('active');
            }

            this.classList.add('active');
            this.nextElementSibling.classList.add('show');

        }
    }

}

if(document.querySelector('.main-info__items')) {
    const ii = '.info-item__';

    document.querySelector('.main-info__items').addEventListener('click', (e) => {
        const tg = e.target;
        if(tg.closest(ii+'box') && !tg.closest(ii+'panel') ) {
            const accBox = tg.closest(ii+'box'),
                  accsPanel = accBox.querySelector(ii+'panel');
                  accsPanel.classList.toggle('show');

            function changeImg(plusOrMin) {
                const icon = accBox.querySelector(ii+'icon');

                icon.querySelector('img').remove();
                icon.insertAdjacentHTML('afterbegin', `<img src="img/icons/faqs-${plusOrMin}.svg" alt="${plusOrMin}">`);
            }

            if(accsPanel.classList.contains('show')) {
                changeImg('minus');
            } else {
                changeImg('plus');
            }
        }
    })

    const panels = document.querySelectorAll(ii+'panel');
    function hideAccordionContent() {
        for (let i = 0; i < panels.length; i++) {
            panels[i].style.marginTop = `-${panels[i].offsetHeight}px`;
        }
    }

    hideAccordionContent();

    window.addEventListener('resize', () => {
        hideAccordionContent();
    })
}