document.addEventListener('DOMContentLoaded', function() {

    // Path: header.js
    let dropdowns = document.querySelectorAll('.dropdown');
    if(dropdowns.length){
        dropdowns.forEach((dropdown) => {
            let dropdownArrow = dropdown.querySelector('.dropdown__header-arrow');
            dropdownArrow.addEventListener('click', (e) => {
                if (dropdown.classList.contains('open') && dropdown.classList.contains('force-open')) {
                    dropdown.classList.remove('open', 'force-open');
                } else {
                    dropdown.classList.add('open', 'force-open');
                }
            });
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
        });
    }

    // Path: tabs.js
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

});

