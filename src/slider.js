// Index para el slide actual
let currentSlideIndex = 0;

// Todas las imágenes del slider
const slideImages = document.querySelectorAll(".slide-image");

// Los botones de navegación
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Función para mostrar un slide específico
function showSlide(index) {
  slideImages.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
  });
  currentSlideIndex = index;
}

// Función para avanzar al siguiente slide
function nextSlide() {
  let nextIndex = (currentSlideIndex + 1) % slideImages.length;
  showSlide(nextIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
  let prevIndex = (currentSlideIndex - 1 + slideImages.length) % slideImages.length;
  showSlide(prevIndex);
}

// Inicializar el slider mostrando el primer slide
showSlide(0);

// Añadir event listeners a los botones
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function navigateTo(slideIndex) {
    showSlide(slideIndex);
    updateNavigationDots(slideIndex);
}

function updateNavigationDots(activeIndex) {
    const dots = document.querySelectorAll(".cursor-pointer");
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.remove("bg-opacity-50");
            dot.classList.add("bg-white");
        } else {
            dot.classList.add("bg-opacity-50");
            dot.classList.remove("bg-white");
        }
    });
}

function showSlide(index) {
    slideImages.forEach((img, i) => {
        img.style.opacity = i === index ? "1" : "0";
    });
    currentSlideIndex = index;
    updateNavigationDots(index);
}

function updateNavigationDots(activeIndex) {
    const dots = document.querySelectorAll(".cursor-pointer");
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.remove("bg-opacity-50");
        } else {
            dot.classList.add("bg-opacity-50");
        }
    });
}

function navigateTo(index) {
    // Suponiendo que tus imágenes tienen una clase común llamada "slider-image"
    const images = document.querySelectorAll('.slider-image');

    // Ocultar todas las imágenes
    images.forEach(img => {
        img.style.opacity = 0;
    });

    // Mostrar la imagen seleccionada con la animación
    const selectedImage = images[index];
    selectedImage.classList.add('fade-in');
    
    // Remover la animación una vez que haya finalizado para que pueda ser aplicada de nuevo
    selectedImage.addEventListener('animationend', () => {
        selectedImage.classList.remove('fade-in');
    });
}
