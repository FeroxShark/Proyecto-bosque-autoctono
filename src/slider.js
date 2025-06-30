// Simple slider script
// Muestra y navega por las imágenes del carrusel

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide-image');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const dots = document.querySelectorAll('#slider-bars button');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white', i === index);
      dot.classList.toggle('bg-opacity-50', i !== index);
    });
    current = index;
  }

  prevButton.addEventListener('click', () => {
    const index = (current - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextButton.addEventListener('click', () => {
    const index = (current + 1) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 7500);

  showSlide(0);
});
