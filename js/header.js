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
  