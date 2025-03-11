        // Funcionalidad para mostrar el menú móvil
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            const toggleButton = document.getElementById('menu-toggle');
            
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
                toggleButton.textContent = 'Menu';
                toggleButton.style.color = 'white'; // Color original
                toggleButton.classList.remove('bold-text', 'fixed-top'); // Quitar negrita y la posición fija
            } else {
                menu.style.display = 'block';
                toggleButton.textContent = 'Cerrar';
                toggleButton.style.color = 'red'; // Cambiar a rojo
                toggleButton.classList.add('bold-text', 'fixed-top'); // Agregar negrita y la posición fija
            }
        });

        
        // Mostrar el menú cuando se hace scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
            if (window.innerWidth > 840 && currentScroll > 500) {
                header.style.top = '0';
            } else if (window.innerWidth <= 840 && currentScroll > 300) {
                header.style.top = '0';
            } else {
                header.style.top = '-50px';
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });



                // Función para verificar si la imagen es visible en la pantalla
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Seleccionar la imagen
    const image = document.querySelector('.image-effect');
    
    // Agregar evento de scroll para verificar la visibilidad
    window.addEventListener('scroll', function() {
        if (isInViewport(image)) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');
        }
    });
    
    // Verificar visibilidad al cargar la página
    document.addEventListener('DOMContentLoaded', function() {
        if (isInViewport(image)) {
            image.classList.add('visible');
        }
    });