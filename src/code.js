window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});

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
  
// Buttons
document.getElementById('prev-button').addEventListener('click', function() {
    let prevImage = (currentImage - 1 + totalImages) % totalImages;
    navigateTo(prevImage);
});

document.getElementById('next-button').addEventListener('click', function() {
    let nextImage = (currentImage + 1) % totalImages;
    navigateTo(nextImage);
});

// Toma referencia de los elementos
const images = document.querySelectorAll(".slide-image");
const plantNameElement = document.getElementById("plant-name");

// Función que actualiza el nombre de la planta en función de la imagen visible
function updatePlantName() {
    for (let i = 0; i < images.length; i++) {
        if (window.getComputedStyle(images[i]).opacity === "1") {
            plantNameElement.innerText = "Planta " + (i + 1);
            break;
        }
    }
}

// Eventos para los botones de navegación
document.getElementById("prev-button").addEventListener("click", function() {
    setTimeout(updatePlantName, 600); // Espera la duración de la transición
});
document.getElementById("next-button").addEventListener("click", function() {
    setTimeout(updatePlantName, 600); // Espera la duración de la transición
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      let loadings = document.querySelectorAll('.loading-content');
      let reals = document.querySelectorAll('.real-content');

      loadings.forEach(loading => {
          loading.classList.add('hidden');
      });

      reals.forEach(real => {
          real.classList.remove('hidden');
      });
  }, 1000);
});
