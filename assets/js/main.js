document.addEventListener('DOMContentLoaded', function () {
    let showAll = document.querySelectorAll('.bf__menu-showAll');

    if(showAll.length !== 0){
        showAll.forEach((item) => {
            let parent = item.closest('.nav__list');
            let children = parent.querySelectorAll('li');
            children.forEach((child, index) => {
                if (index > 4 && !child.classList.contains('showAll-li')) {
                    child.style.display = 'none';
                }
            });
            item.addEventListener('click', function (e) {
                e.preventDefault();
                let parent = item.closest('.nav__list');
                let children = parent.querySelectorAll('li');
                if (!item.classList.contains('open')) {
                    item.classList.add('open');
                    children.forEach((child, index) => {
                        if (index > 4 && !child.classList.contains('showAll-li')) {
                            child.style.display = 'block';
                            item.textContent = 'Скрыть остальные';
                        }
                    });
                } else {
                    item.classList.remove('open');
                    children.forEach((child, index) => {
                        if (index > 4 && !child.classList.contains('showAll-li')) {
                            child.style.display = 'none';
                            item.textContent = 'Показать все';
                        }
                    });
                }
            });
        });
    }

    let servicesSlider = document.querySelector(".services__slider");
    if (servicesSlider) {
        if (window.innerWidth < 991) {
            new Carousel(servicesSlider, {0: 2}, {arrows: true, nav: true});
        }
    }

    let reviewsSlider = document.querySelector(".reviews__slider");
    if (reviewsSlider) {
        new Carousel(reviewsSlider, {0: 1, 992:3}, {arrows: true, nav: true});
    }

    let faqSlider = document.querySelector(".faq__licences--wrap--slider");
    if (faqSlider) {
        new Carousel(faqSlider, {0: 2}, {arrows: true, nav: true});
    }

    let requisitesLicensesSlider = document.querySelector(".requisites__licenses--slider");
    if (requisitesLicensesSlider) {
        new Carousel(requisitesLicensesSlider, {0: 2}, {arrows: true, nav: true});
    }

    let catalogSlider = document.querySelector('.catalog__slider');
    if(catalogSlider){
        new Carousel(catalogSlider, {0: 1, 992:3}, {arrows: true, nav: true});
    }

    let addProductSlider = document.querySelector('.addProduct__slider');
    if(addProductSlider){
        new Carousel(addProductSlider, {0: 1, 992:3}, {arrows: true, nav: true});
    }

    let pageReviewsSlider = document.querySelector('.pageReviews__slider');
    if(pageReviewsSlider){
        new Carousel(pageReviewsSlider, {0: 5, 992:2}, {arrows: true, nav: true});
    }

});