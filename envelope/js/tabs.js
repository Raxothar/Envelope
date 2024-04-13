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