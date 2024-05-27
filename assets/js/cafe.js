document.addEventListener('DOMContentLoaded', function () {

    const itemPageNav = document.querySelector('.ItemPage__Nav');

    if (itemPageNav) {
        const itemPageNavHeight = itemPageNav.offsetHeight;
        const initialOffsetTop = itemPageNav.offsetTop;

        window.addEventListener('scroll', function () {
            if (window.scrollY >= initialOffsetTop) {
                itemPageNav.style.position = 'fixed';
                itemPageNav.style.top = '0';
                document.body.style.paddingTop = itemPageNavHeight + 'px';
            } else {
                itemPageNav.style.position = 'relative';
                itemPageNav.style.top = 'auto';
                document.body.style.paddingTop = '0';
            }
        });
    }

    let filterButton = document.querySelector('.filter__button');
    let filterButtonClose = document.querySelector('.filter__back--title--close');
    if(filterButton){
        filterButton.addEventListener('click', function(){
            document.querySelector('.filter__back').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
        });
    }
    if(filterButtonClose){
        filterButtonClose.addEventListener('click', function(){
            document.querySelector('.filter__back').classList.remove('active');
            document.querySelector('body').classList.remove('lock');
        });
    }

});