document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 768) {
    var scene = document.getElementById('parallax-container');
    if (scene) {
      var parallaxInstance = new Parallax(scene);
    }
  }
});
