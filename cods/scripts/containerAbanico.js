document.addEventListener("DOMContentLoaded", function() {
    function applyTransformations() {
        var isSmallScreen = window.innerWidth <= 840;
        var isLargeScreen = window.innerWidth >= 1681;

        var divImg2 = document.getElementById("div-img-2");
        var divImg3 = document.getElementById("div-img-3");
        var divImg4 = document.getElementById("div-img-4");

        if (isSmallScreen) {
            setTimeout(function() {
                divImg2.style.transform = "rotate(45deg) translate(-180px, -45px) rotate(-45deg)";
            }, 300);

            setTimeout(function() {
                divImg3.style.transform = "translateY(-300px)";
            }, 800);

            setTimeout(function() {
                divImg4.style.transform = "rotate(45deg) translate(-45px, -180px) rotate(-45deg)";
            }, 1400);
        } else if (isLargeScreen) {
            setTimeout(function() {
                divImg2.style.transform = "rotate(45deg) translate(-400px, 200px) rotate(-45deg)";
            }, 300);

            setTimeout(function() {
                divImg3.style.transform = "translateY(-300px)";
            }, 800);

            setTimeout(function() {
                divImg4.style.transform = "rotate(45deg) translate(200px, -400px) rotate(-45deg)";
            }, 1400);
        } else {
            setTimeout(function() {
                divImg2.style.transform = "rotate(45deg) translate(-350px, 175px) rotate(-45deg)";
            }, 300);

            setTimeout(function() {
                divImg3.style.transform = "translateY(-350px)";
            }, 800);

            setTimeout(function() {
                divImg4.style.transform = "rotate(45deg) translate(175px, -350px) rotate(-45deg)";
            }, 1400);
        }
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                applyTransformations();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.getElementById("containerAbanico"));

    window.addEventListener("resize", function() {
        observer.unobserve(document.getElementById("containerAbanico"));
        observer.observe(document.getElementById("containerAbanico"));
    });
});