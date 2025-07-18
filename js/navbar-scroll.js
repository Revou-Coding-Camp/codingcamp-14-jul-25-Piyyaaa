document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("fixed-top", "nav-scrolled");
            navbar.classList.remove("not-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
            // tetap fixed-top, tapi ubah style
            navbar.classList.add("not-scrolled");
        }
    });
});
