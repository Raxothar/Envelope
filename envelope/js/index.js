document.addEventListener('DOMContentLoaded', function() {

    let burger = document.querySelector('.burger');
    if(burger){
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('close');
            document.querySelector('body').classList.toggle('lock');
            document.querySelector('.header__top-contacts').classList.toggle('hide-xs');
            document.querySelector('.header').classList.toggle('open');
            let topLogo = document.querySelector('.header__top-logo');
            if(topLogo.classList.contains('col-xs-3')){
                topLogo.classList.remove('col-xs-3');
                topLogo.classList.add('col-xs-10');
            }
            else {
                topLogo.classList.remove('col-xs-10');
                topLogo.classList.add('col-xs-3');
            }
            topLogo.querySelector('.logoTitle').classList.toggle('mobileLogoTitle');
        });
    }

    // Path: header.js
    let dropdowns = document.querySelectorAll('.dropdown');
    if(dropdowns.length){
        dropdowns.forEach((dropdown) => {
            let dropdownArrow = dropdown.querySelector('.dropdown__header-arrow');

            if(dropdownArrow != null){
                dropdownArrow.addEventListener('click', (e) => {
                    dropdownArrow.classList.toggle('open');
                    if (window.innerWidth < 990) {
                        dropdown.querySelector('.dropdown__content').classList.toggle('open');
                    }
                    else {
                        if (dropdown.classList.contains('open') && dropdown.classList.contains('force-open')) {
                            dropdown.classList.remove('open', 'force-open');
                        } else {
                            dropdown.classList.add('open', 'force-open');
                        }
                    }
                });


                if (window.innerWidth > 990){
                    dropdown.addEventListener('mouseout', (e) => {
                        // Закрываем дропдаун только если не установлен force-open
                        if (!dropdown.classList.contains('force-open')) {
                            dropdown.classList.remove('open');
                        }
                    });
                    dropdown.addEventListener('mouseover', (e) => {
                        // Открываем дропдаун при наведении
                        if (!dropdown.classList.contains('force-open')) {
                            dropdown.classList.add('open');
                        }
                    });
                }
            }
        });
    }

    let evTabs = document.querySelectorAll('.tabs');
    if (evTabs.length){
        evTabs.forEach((tabsContainer) => {
            let tabsItems = tabsContainer.querySelectorAll('.tabs__items-item');
            let tabsContent = tabsContainer.querySelectorAll('.tabs__content-item');
            tabsItems.forEach((tabItem) => {
                tabItem.addEventListener('click', (e) => {
                    let tab = e.target;
                    let tabData = tab.getAttribute('data-tab');
                    tabsItems.forEach((tabItem) => {
                        tabItem.classList.remove('active');
                    });
                    tabsContent.forEach((tabContent) => {
                        tabContent.classList.remove('active');
                    });
                    tab.classList.add('active');
                    tabsContent.forEach((tabContent) => {
                        if (tabContent.getAttribute('data-content') === tabData){
                            tabContent.classList.add('active');
                        }
                    });
                });
            });
        });
    }
    
    let accordeons = document.querySelectorAll(".accordeon");
    if(accordeons.length > 0){
        accordeons.forEach((accordeon) => {
            let accordeonItems = accordeon.querySelectorAll('.accordeon__item');
            accordeonItems.forEach((accordeonItem) => {
                let accordeonHeader = accordeonItem.querySelector('.accordeon__item--header');
                accordeonHeader.addEventListener('click', (e) => {
                    accordeonItem.classList.toggle('open');
                });
            });
        });
    }

    let showMoreContainer = document.querySelectorAll(".showMore__container");
    if(showMoreContainer.length > 0){

        showMoreContainer.forEach((showMore) => {
            let showMoreButton = showMore.querySelector('.showMore__button');
            let showMoreHide = showMore.querySelector('.showMore__hide');
            showMoreButton.addEventListener('click', (e) => {
                showMoreHide.classList.toggle('open');
                if (showMoreHide.classList.contains('open')){
                    showMoreButton.innerHTML = 'Скрыть';
                }
                else {
                    showMoreButton.innerHTML = 'Развернуть';
                }
            });
        });

    }

    let modalTargetButtons = document.querySelectorAll('[data-ev-modal-target]');
    if (modalTargetButtons.length > 0){
        modalTargetButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                let target = button.getAttribute('data-ev-modal-target');
                let modal = document.querySelector('.modal[data-ev-modal-id="'+target+'"]');
                if (modal){
                    modal.classList.add('open');
                    document.body.classList.add("lock");
                    let modalClose = modal.querySelector('.modal__close');
                    modalClose.addEventListener('click', (e) => {
                        modal.classList.remove('open');
                        document.body.classList.remove("lock");
                    });
                }
            });
        });
    }


    // Находим все элементы с классом "popup-image"
    // Находим все элементы с классом "popup-image"
    let popupImages = document.querySelectorAll('.popup-image');

// Проходимся по каждому изображению
    popupImages.forEach(function(image) {
        // Добавляем обработчик события клика
        image.addEventListener('click', function() {
            // Создаем элемент попапа
            let popupModal = document.createElement('div');
            popupModal.classList.add('popup-img-modal');

            // Создаем содержимое попапа
            let popupModalContent = document.createElement('div');
            popupModalContent.classList.add('popup-img-modal-content');

            // Создаем кнопку для закрытия попапа
            let closeButton = document.createElement('div');
            closeButton.classList.add('popup-img-modal-close');
            closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Добавляем текст в кнопку закрытия
            closeButton.style.cursor = 'pointer';

            // Создаем элемент для изображения
            let popupImgContainer = document.createElement('div');
            popupImgContainer.classList.add('popup-img-modal-image');
            let popupImg = document.createElement('img');
            popupImg.src = image.src;
            popupImg.alt = image.alt;

            // Добавляем изображение и кнопку закрытия в содержимое попапа
            popupImgContainer.appendChild(popupImg);
            popupModalContent.appendChild(closeButton);
            popupModalContent.appendChild(popupImgContainer);

            // Добавляем содержимое попапа в попап
            popupModal.appendChild(popupModalContent);

            // Добавляем попап на страницу
            document.body.appendChild(popupModal);

            // Добавляем обработчик события клика для закрытия попапа при клике вне изображения
            popupModal.addEventListener('click', function(event) {
                if (event.target === popupModal) {
                    // Удаляем попап при клике вне изображения
                    document.body.removeChild(popupModal);
                }
            });

            // Добавляем обработчик события клика для закрытия попапа при клике на кнопку закрытия
            closeButton.addEventListener('click', function() {
                // Удаляем попап при клике на кнопку закрытия
                document.body.removeChild(popupModal);
            });
        });
    });

});

