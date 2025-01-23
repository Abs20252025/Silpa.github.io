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

document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".silpa-column");

  // Función para verificar si un elemento es visible en la pantalla
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Agrega la clase `visible` cuando las columnas están en pantalla
  function handleScroll() {
    columns.forEach((column) => {
      if (isVisible(column)) {
        column.classList.add("visible");
      }
    });
  }

  // Escucha el evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Llama a handleScroll inicialmente por si ya está visible al cargar
  handleScroll();
});

/* VALORES*/
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".silpa-row .silpa-full-column h3"); // Selecciona el título

  // Función para verificar si el elemento es visible en la pantalla
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Función que revisa si el título es visible y le agrega la clase
  function checkVisibility() {
    if (isInViewport(title)) {
      title.classList.add("visible");
    }
  }

  // Escucha el scroll y ejecuta la función
  window.addEventListener("scroll", checkVisibility);

  // Ejecuta al cargar la página por si ya está visible
  checkVisibility();
});



document.addEventListener("DOMContentLoaded", function () {
  const valueCards = document.querySelectorAll(".silpa-value-card");

  // Función para verificar si un elemento es visible en la pantalla
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // Agrega la clase `visible` cuando las tarjetas están en pantalla
  function handleScroll() {
    valueCards.forEach((card) => {
      if (isVisible(card)) {
        card.classList.add("visible");
      }
    });
  }

  // Escucha el evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Llama a handleScroll inicialmente por si ya está visible al cargar
  handleScroll();
});