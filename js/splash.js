document.addEventListener("DOMContentLoaded", function () {
    const splash = document.getElementById('splash-screen');
    const splashText = document.querySelector('.splash-text');
    const splashTexts = [
      "I Am Front-End Developer",
      "Hang tight, cool things coming your way!",
      "Welcome to my portofolio!"
    ];
    let textIndex = 0;

    const fadeDuration = 500; // waktu fade out/in (ms)
    let textInterval;

    const changeText = () => {
        splashText.classList.add('fade-text');
        setTimeout(() => {
            textIndex = (textIndex + 1) % splashTexts.length;
            splashText.textContent = splashTexts[textIndex];
            splashText.classList.remove('fade-text');
        }, fadeDuration);
    };

    textInterval = setInterval(changeText, 2000 + fadeDuration);

    const hideSplash = () => {
        splash.classList.add("fade-out");
        setTimeout(() => {
            splash.style.display = "none";
        }, 500);
        clearInterval(textInterval);
        window.removeEventListener("scroll", hideSplash);
        window.removeEventListener("click", hideSplash);
    };

    // Hanya event klik dan scroll untuk hilangkan splash
    window.addEventListener("scroll", hideSplash);
    window.addEventListener("click", hideSplash);

    // Hapus baris ini jika tidak ingin splash hilang otomatis setelah waktu tertentu
    // setTimeout(hideSplash, 6000);
});
