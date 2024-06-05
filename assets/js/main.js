document.addEventListener("DOMContentLoaded", function (){

    window.addEventListener("load", function() {
        let preloader = document.getElementById("preloader");
        preloader.style.display = "none";
        let content = document.getElementById("wrapper");
        content.style.display = "block";
    });

    let cardSlider = document.querySelectorAll(".card-slider");
    if (cardSlider.length > 0) {
        cardSlider.forEach(function (oneCardSlider){
            new Carousel(oneCardSlider, {0: 1}, {arrows: true, nav: false});
        });
    }

});