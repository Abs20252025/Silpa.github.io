// JS PARA MENU RESPONSIVE
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.silpa-header__menu-toggle');
  const navMenu = document.querySelector('.silpa-header__nav');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

// JS PARA EL SLIDER INICIO
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

  // Función para actualizar la posición del slider
  function updateSliderPosition() {
    const newTransformValue = `translateX(-${currentSlide * 100}%)`;
    slider.style.transform = newTransformValue;
  }

  // Intervalo para cambiar el slide automáticamente cada 4500 ms
  setInterval(nextSlide, 4500);

  // Event listener para manejar la transición y reiniciar al llegar al último slide
  slider.addEventListener('transitionend', function () {
    if (currentSlide === totalSlides - 1) {
      // Reiniciar el slider sin animación antes de volver al primer slide
      slider.style.transition = 'none';   
      setTimeout(function () {
        currentSlide = 0; // Reiniciar al primer slide
        updateSliderPosition();
        setTimeout(function () {
          slider.style.transition = 'transform 1s ease-in-out'; // Rehabilitar la animación
        }, 50);
      }, 4500);  // Intervalo antes de reiniciar
    }
  });
});


// Función reutilizable para verificar si un elemento es visible en la ventana
function isVisible(el) {
  if (!el) return false; // Verifica si el elemento existe
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// JS PARA LAS COLUMNAS
document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".silpa-column");

  function handleScroll() {
    columns.forEach((column) => {
      if (isVisible(column)) {
        column.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Llamado inicial para mostrar elementos al cargar
});

// JS PARA LOS TITULOS
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".silpa-row .silpa-full-column h3");

  if (title) { // Verifica si el título existe antes de hacer cualquier cosa
    function checkVisibility() {
      if (isVisible(title)) {
        title.classList.add("visible");
      }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }
});

// JS PARA TARJETAS
document.addEventListener("DOMContentLoaded", function () {
  const valueCards = document.querySelectorAll(".silpa-value-card");

  if (valueCards.length > 0) { // Verifica si hay tarjetas
    function handleScroll() {
      valueCards.forEach((card) => {
        if (isVisible(card)) {
          card.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamado inicial para mostrar tarjetas al cargar
  }
});

