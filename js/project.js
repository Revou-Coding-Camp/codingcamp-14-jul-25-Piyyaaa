var slideIndex = 1;
showSlide(slideIndex); // Tampilkan slide pertama

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function dotslide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; // Pastikan ini FLEX untuk align center
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// 🔁 AUTOPLAY
function autoSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("imgslide").length) {
        slideIndex = 1;
    }
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000); // Ulangi setiap 3 detik
}

// Mulai autoplay setelah 3 detik
setTimeout(autoSlide, 3000);
