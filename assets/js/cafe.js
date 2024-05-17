document.addEventListener('DOMContentLoaded', function () {
    let globalNav__slider = document.querySelector(".globalNav__slider");
    if (globalNav__slider) {
        new Carousel(globalNav__slider, {0: 2}, {arrows: false, nav: false});
    }

});