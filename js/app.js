
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

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Avanza al siguiente slide
    updateSliderPosition();
  }

   // JS ACTUALIZACIÓN SLIDER
  function updateSliderPosition() {
    const newTransformValue = `translateX(-${currentSlide * 100}%)`;
    slider.style.transform = newTransformValue;
  }

   // JS PARA INTERVALO DE SLIDER
  setInterval(nextSlide, 4500);

   // JS PARA SLIDER CONTINUO
  slider.addEventListener('transitionend', function () {
    if (currentSlide === totalSlides - 1) {
      slider.style.transition = 'none';   
      setTimeout(function () {
        currentSlide = 0; // JS PARA REINICIO
        updateSliderPosition();
        setTimeout(function () {
          slider.style.transition = 'transform 1s ease-in-out'; // JS REINICIO SLIDER INICIAR
        }, 50);
      }, 4500);  // JS PARA EL INTERVALO DEL REINICIO
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".silpa-column");

  // JS VERIFICAR SI SE VISUALIZA
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // JS PARA MOSTRAR COLUMNAS 
  function handleScroll() {
    columns.forEach((column) => {
      if (isVisible(column)) {
        column.classList.add("visible");
      }
    });
  }

  // JS DETECTA MOVIMIENTO SCROLL
  window.addEventListener("scroll", handleScroll);

  // JS LLAMADO DE VERIFICACION
  handleScroll();
});

/* VALORES*/
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".silpa-row .silpa-full-column h3"); // Selecciona el título

  // JS VERIFICAR SI SE VISUALIZA
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // JS VERIFICA VISUALIZACION DEL TITULO
  function checkVisibility() {
    if (isInViewport(title)) {
      title.classList.add("visible");
    }
  }

  // JS DETECTA MOVIMIENTO SCROLL
  window.addEventListener("scroll", checkVisibility);

  // JS LLAMADO DE VERIFICACION
  checkVisibility();
});



document.addEventListener("DOMContentLoaded", function () {
  const valueCards = document.querySelectorAll(".silpa-value-card");

  // JS VERIFICAR SI SE VISUALIZA
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // JS PARA TARJETAS
  function handleScroll() {
    valueCards.forEach((card) => {
      if (isVisible(card)) {
        card.classList.add("visible");
      }
    });
  }

  // JS DETECTA MOVIMIENTO SCROLL
  window.addEventListener("scroll", handleScroll);

  0

  
  // JS LLAMADO DE VERIFICACION
  handleScroll();
});