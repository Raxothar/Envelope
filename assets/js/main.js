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
        console.log('qu');
        new Carousel(servicesSlider, {0: 4, 991: 12}, {arrows: true, nav: true});
    }
});