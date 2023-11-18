// Open menu
const iconMenu = document.querySelector('.icon-menu'),
    menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock');
})

// Open language bar
window.addEventListener('click', function (e) {
    const langBox = document.querySelector('.languages-box');
    if (e.target == document.querySelector('.header__arrow')) {
        langBox.classList.toggle('active');
    } else if(langBox.classList.contains('active')) {
        langBox.classList.remove('active');
    }

})

if(document.querySelector('.processo__items')) {
    const processoItems = document.querySelector('.processo__items'),
          processoLines = processoItems.querySelectorAll('.processo-item__deco');
    
    function changeLineVal() {
        let processoGap = parseInt(this.getComputedStyle(processoItems).columnGap);
        processoLines.forEach(item => {
            Object.assign(item.style, {
                  width: processoGap + 'px',
                  right: -processoGap + 'px',
              });
        });
    
    }
    
    if(processoItems) {
        window.addEventListener('resize', changeLineVal);
    }
}




