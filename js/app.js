document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.silpa-header__menu-toggle');
  const navMenu = document.querySelector('.silpa-header__nav');
  const closeButton = document.querySelector('.silpa-header__close-btn');
  const menuItems = document.querySelectorAll('.silpa-header__menu-item a'); // Todos los links del menú
  const overlay = document.querySelector('.silpa-header__overlay'); // El fondo oscuro

  // Asegurarse de que el overlay esté oculto cuando la página se cargue
  overlay.style.display = 'none';

  // Abre o cierra el menú al hacer clic en el botón de menú
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      overlay.style.display = 'block'; // Mostrar el overlay
    } else {
      overlay.style.display = 'none'; // Ocultar el overlay
    }
  });

  // Cierra el menú cuando se hace clic en un enlace del menú
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.style.display = 'none'; // Ocultar el overlay
    });
  });

  // Cierra el menú cuando se hace clic en la "X"
  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.style.display = 'none'; // Ocultar el overlay
  });

  // Cierra el menú al hacer clic en el overlay
  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.style.display = 'none'; // Ocultar el overlay
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sectionServicios = document.querySelector("#servicios");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionServicios.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },
    {
      root: null, // Usa el viewport
      threshold: 0.75, // Activa cuando el 75% de la sección es visible
    }
  );

  observer.observe(sectionServicios);
});

