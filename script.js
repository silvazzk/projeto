document.addEventListener("DOMContentLoaded", function() {
    var banners = document.querySelectorAll(".banner");
    var index = 0;

    function showNextBanner() {
        banners[index].classList.remove("active");
        index = (index + 1) % banners.length;
        banners[index].classList.add("active");
    }

    function showPrevBanner() {
        banners[index].classList.remove("active");
        index = (index - 1 + banners.length) % banners.length;
        banners[index].classList.add("active");
    }

    banners[index].classList.add("active");

    var interval = setInterval(showNextBanner, 3000);

    document.querySelector(".banner-container").addEventListener("mouseenter", function() {
        clearInterval(interval);
    });

    document.querySelector(".banner-container").addEventListener("mouseleave", function() {
        interval = setInterval(showNextBanner, 3000);
    });

    document.querySelector(".prev").addEventListener("click", function() {
        clearInterval(interval);
        showPrevBanner();
    });

    document.querySelector(".next").addEventListener("click", function() {
        clearInterval(interval);
        showNextBanner();
    });
});
