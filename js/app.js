document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.silpa-header__menu-toggle');
  const navMenu = document.querySelector('.silpa-header__nav');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.querySelector('.slider');

  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Avanza al siguiente slide
    updateSliderPosition();
  }

  // Actualiza la posición del slider
  function updateSliderPosition() {
    const newTransformValue = `translateX(-${currentSlide * 100}%)`;
    slider.style.transform = newTransformValue;
  }

  // Cambiar de slide cada 4 segundos
  setInterval(nextSlide, 4500);

  // Eliminar transición al llegar al primer slide para que no haya salto brusco
  slider.addEventListener('transitionend', function () {
    if (currentSlide === totalSlides - 1) {
      slider.style.transition = 'none';  // Desactivamos temporalmente la transición
      setTimeout(function () {
        currentSlide = 0; // Reiniciamos al primer slide, pero sin transiciones rápidas
        updateSliderPosition();
        setTimeout(function () {
          slider.style.transition = 'transform 1s ease-in-out'; // Volvemos a activar la transición
        }, 50);
      }, 4500);  // Esperamos el tiempo de duración de la transición para reiniciar
    }
  });
});