// ANIMACIÓN DEL HEADER

document.addEventListener("DOMContentLoaded", () => {
    // Agregamos la clase "animated" después de un pequeño retraso
    setTimeout(() => {
      document.querySelector(".silpa-header").classList.add("animated");
    }, 300);
    setTimeout(() => {
      document.querySelector(".inicio-silpa").classList.add("animated");
    }); // Se activa 2 segundos después del header
  });
  


// JS PARA EL SLIDER INICIO
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');
    const slideContents = document.querySelectorAll('.slide-content');

    // Duplicar el primer slide al final para efecto infinito
    const firstClone = slides[0].cloneNode(true);
    slider.appendChild(firstClone);

    // Ajustar la cantidad total de slides (incluyendo el clon)
    const totalSlidesWithClone = totalSlides + 1;

    // Función para avanzar al siguiente slide
    function nextSlide() {
        slideContents[currentSlide].classList.remove('animated'); // Oculta el contenido actual
        currentSlide++;

        slider.style.transition = 'transform 1s ease-in-out';
        updateSliderPosition();

        // Si llegamos al slide clonado, volvemos al primero sin parpadeo
        if (currentSlide === totalSlides) {
            setTimeout(() => {
                slider.style.transition = 'none'; // Quitamos la animación para evitar el "corte"
                currentSlide = 0;
                updateSliderPosition();
                setTimeout(() => {
                    slider.style.transition = 'transform 1s ease-in-out'; // Rehabilitar transición
                }, 50);
            }); // Esperar a que termine la animación antes de resetear
        }

        // Activar la animación del contenido del nuevo slide
        setTimeout(() => {
            slideContents[currentSlide].classList.add('animated');
        }, 500);
    }

    // Función para actualizar la posición del slider
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Intervalo para cambiar el slide automáticamente cada 4900 ms
    setInterval(nextSlide, 5500);

    // Asegurar que el primer slide tenga la animación activada al inicio
    setTimeout(() => {
        slideContents[0].classList.add('animated');
    }, 2000);
});

// PARA ANIMACION DE LAS CARDS

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
      ".silpa-trabajo-title, .silpa-trabajo-description, .silpa-card"
    );
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("silpa-card")) {
              // Agregamos un retraso progresivo a las cards
              setTimeout(() => {
                entry.target.classList.add("show");
              }, index * 200); // Puedes cambiar 200ms por un valor mayor si quieres un retraso más notorio
            } else {
              entry.target.classList.add("show");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Cambiamos el umbral a 50% para que la animación inicie cuando esté a la mitad de la pantalla
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  
//ANIMACION BANNER

document.addEventListener("DOMContentLoaded", function () {
    const imagenBanner = document.querySelector(".imagen-banner");
    const contenidoBanner = document.querySelector(".contenido-banner");
  
    function mostrarBanner() {
      const posicionImagen = imagenBanner.getBoundingClientRect().top;
      const posicionTexto = contenidoBanner.getBoundingClientRect().top;
      const alturaPantalla = window.innerHeight;
  
      if (posicionImagen < alturaPantalla * 0.75) {
        imagenBanner.classList.add("show");
      }
  
      if (posicionTexto < alturaPantalla * 0.75) {
        contenidoBanner.classList.add("show");
      }
    }
  
    window.addEventListener("scroll", mostrarBanner);
    mostrarBanner(); // Ejecutar al cargar la página
  });
  
  