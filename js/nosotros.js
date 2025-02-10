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
