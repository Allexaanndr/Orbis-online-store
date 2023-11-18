if (document.querySelector('[data-bestseller]')) {

    const goods = document.querySelectorAll('[data-bestseller]'),
        btns = document.querySelectorAll('.filter-block__button');

    // show and hide goods functions
    function hideGoods() {
        for (let i = 0; i < goods.length; i++) {
            goods[i].classList.add('hide');
        }
    }
    function showGoods() {
        for (let i = 0; i < goods.length; i++) {
            goods[i].classList.remove('hide');
        }
    }
    // show and hide goods functions

    // open modal filter menu
    document.querySelector('.filter-block__all').addEventListener('click', (e) => {
        document.body.classList.add('lock');
        document.querySelector('.filter-settings').style.display = 'flex';
        for (let i = 0; i < goods.length; i++) {
            btns[i].classList.remove('active');
        }
        hideGoods();
    })
    // open modal filter menu

    // filter logistic
    document.querySelector('.filter-settings').addEventListener('click', function (e) {
        if (e.target == this || e.target == document.querySelector('.filter-settings__close')) {
            document.body.classList.remove('lock');
            this.style.display = 'none';
            btns[0].classList.add('active');
            showGoods();


        } else if (e.target.closest('.filter-settings__item')) {
            const filterItem = e.target.closest('.filter-settings__item');
            filterItem.classList.toggle('clicked');


        } else if (e.target.classList.contains('filter-settings__btn')) {
            if (document.querySelectorAll('.clicked').length !== 0) {
                const clickedElems = document.querySelectorAll('.clicked');
                for (let i = 0; i < goods.length; i++) {
                    const good = goods[i];


                    for (let j = 0; j < clickedElems.length; j++) {
                        const selected = clickedElems[j];
                        if (good.dataset.bestseller === selected.dataset.filter) {
                            good.classList.remove('hide');
                        }

                        for (let x = 0; x < btns.length; x++) {
                            const btn = btns[x];

                            if (btn.dataset.filter === selected.dataset.filter) {
                                btn.classList.add('active');
                            }

                        }
                    }
                }
                this.style.display = 'none';
                document.body.classList.remove('lock');

                for (let j = 0; j < clickedElems.length; j++) {
                    clickedElems[j].classList.remove('clicked');
                }
            } else {
                alert('Seleziona una categoria');
            }



        }
        // filter logistic

    })
}






