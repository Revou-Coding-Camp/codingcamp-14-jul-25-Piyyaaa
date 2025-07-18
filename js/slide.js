  let slideIndex = 1;
  let autoSlideInterval;

  showSlide(slideIndex);

  function nextSlide(n) {
    showSlide(slideIndex += n);
  }

  function dotSlide(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("imgslide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function autoSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("imgslide").length) {
      slideIndex = 1;
    }
    showSlide(slideIndex);
    autoSlideInterval = setTimeout(autoSlide, 3000);
  }

  function pauseSlide() {
    clearTimeout(autoSlideInterval);
  }

  function resumeSlide() {
    autoSlideInterval = setTimeout(autoSlide, 3000);
  }

  // Jalankan autoplay pertama kali
  autoSlideInterval = setTimeout(autoSlide, 3000);

  // Deteksi mouse masuk dan keluar
  const slideContainer = document.querySelector('.slide-container');
  slideContainer.addEventListener('mouseenter', pauseSlide);
  slideContainer.addEventListener('mouseleave', resumeSlide);

  document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dotSlide(index + 1);   // tampilkan slide sesuai dot yang diklik
    pauseSlide();          // hentikan sementara auto-slide
    resumeSlide();         // lanjutkan auto-slide
  });
});
