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
});