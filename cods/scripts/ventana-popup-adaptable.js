    /* No es necesario modificar JavaScript, pero eliminaremos estilos conflictivos */
    const targets = document.querySelectorAll('.hover-target');
  
    targets.forEach(target => {
      const ventanitapopId = target.getAttribute('data-popup');
      const ventanitapop = document.getElementById(ventanitapopId);
  
      target.addEventListener('mouseenter', () => {
        const rect = target.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
  
        // Si el ancho de la pantalla es mayor o igual a 445px, calcula la posición normal
        if (viewportWidth >= 445) {
          const ventanitapopHeight = 650; // Altura fija del ventanitapop
          const ventanitapopWidth = 350;  // Ancho fijo del ventanitapop
  
          let top = rect.top + window.scrollY;
          let left = rect.left + window.scrollX - ventanitapopWidth - 10;
  
          if (top + ventanitapopHeight > window.innerHeight + window.scrollY) {
            top = window.innerHeight + window.scrollY - ventanitapopHeight - 40;
          }
  
          if (top < window.scrollY) {
            top = window.scrollY + 10;
          }
  
          if (left < 0) {
            left = rect.right + window.scrollX + 10;
          }
  
          ventanitapop.style.top = `${top}px`;
          ventanitapop.style.left = `${left}px`;
          ventanitapop.style.display = 'block';
        } else {
          // Si el ancho es menor de 445px, muestra en el centro (controlado por CSS)
          ventanitapop.style.display = 'block';
        }
      });
  
      target.addEventListener('mouseleave', () => {
        ventanitapop.style.display = 'none';
      });
  
      ventanitapop.addEventListener('mouseleave', () => {
        ventanitapop.style.display = 'none';
      });
  
      ventanitapop.addEventListener('mouseenter', () => {
        ventanitapop.style.display = 'block';
      });
    });