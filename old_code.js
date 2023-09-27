document.addEventListener("DOMContentLoaded", function() {
    let currentImage = 0;
    let images = document.querySelectorAll('.slide-image');
    let totalImages = images.length;
  
    function navigateTo(index) {
      images[currentImage].classList.remove('active');
      images[index].classList.add('active');
      currentImage = index;
    }
  
    function autoSlide() {
      let nextImage = (currentImage + 1) % totalImages;
      navigateTo(nextImage);
    }
  
    // Inicializar con la primera imagen
    images[0].classList.add('active');
  
    // Configurar eventos para botones
    document.getElementById("prev-button").addEventListener("click", function() {
      let prevImage = (currentImage - 1 + totalImages) % totalImages;
      navigateTo(prevImage);
    });
  
    document.getElementById("next-button").addEventListener("click", function() {
      let nextImage = (currentImage + 1) % totalImages;
      navigateTo(nextImage);
    });
  
    // Cambiar la imagen cada 7.5 segundos
    setInterval(autoSlide, 7500);
  });
  