// ANIMACIÓN DEL HEADER

document.addEventListener("DOMContentLoaded", () => {
  // Agregamos la clase "animated" después de un pequeño retraso
  setTimeout(() => {
    document.querySelector(".silpa-header").classList.add("animated");
  }, 300);
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

  if (title) {
    function isVisible(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Verifica si el elemento está a la mitad de la pantalla
      return rect.top <= windowHeight / 2 && rect.bottom >= 0;
    }

    function checkVisibility() {
      if (isVisible(title)) {
        title.classList.add("visible");
      }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica al cargar la página
  }
});

// JS PARA TARJETAS
document.addEventListener("DOMContentLoaded", function () {
  const valueCards = document.querySelectorAll(".silpa-value-card");

  if (valueCards.length > 0) {
    // Verifica si hay tarjetas
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

//ANIMACION ELEGIRNOS

document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("#contenidoElegir h2");
  const imagen = document.querySelector("#contenidoElegir .imagen img");
  const texto = document.querySelector("#contenidoElegir .texto");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titulo.classList.add("show");
          imagen.classList.add("show");
          texto.classList.add("show");
          observer.unobserve(entry.target); // Deja de observar tras la animación
        }
      });
    },
    {
      root: null, // Usa la ventana como referencia
      rootMargin: "0px",
      threshold: 0.2, // Se activa cuando el 20% del elemento es visible
    }
  );

  observer.observe(document.querySelector("#contenidoElegir"));
});


//ANIMACION NOSOTROS 
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("#contenidoElegir h2");
  const imagen = document.querySelector("#contenidoElegir .imagen img");
  const beneficios = document.querySelectorAll("#contenidoElegir .beneficio"); // Selecciona todos los beneficios

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titulo.classList.add("show");
          imagen.classList.add("show");

          // Aplica la animación en cascada a los beneficios
          beneficios.forEach((beneficio, index) => {
            setTimeout(() => {
              beneficio.classList.add("show");
            }, index * 200); // Intervalo de 200ms entre cada beneficio
          });

          observer.unobserve(entry.target); // Deja de observar para no repetir la animación
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Se activa cuando el 30% del elemento es visible
    }
  );

  observer.observe(document.querySelector("#contenidoElegir"));
});




