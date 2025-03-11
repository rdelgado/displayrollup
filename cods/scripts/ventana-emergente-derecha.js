// Selección del área para cerrar
const areaCerrar = document.getElementById('areaCerrar');

// Selección de los elementos que abren las ventanas
const abrirVentanas = document.querySelectorAll('.abrirVentana');

// Abre la ventana emergente correspondiente al hacer clic
abrirVentanas.forEach(abrir => {
    abrir.onclick = function() {
        const ventanaId = abrir.getAttribute('data-ventana'); // Obtén el ID desde el atributo

        // Valida que el ID y el elemento existan antes de modificar clases
        if (ventanaId && document.getElementById(ventanaId)) {
            document.getElementById(ventanaId).classList.add('active');
            areaCerrar.classList.add('active');
        } else {
            console.error(`La ventana con ID "${ventanaId}" no existe.`);
        }
    };
});

// Selección de los elementos que cierran las ventanas
const cerrarVentanas = document.querySelectorAll('.cerrar');

// Cierra la ventana emergente al hacer clic en la X
cerrarVentanas.forEach(cerrar => {
    cerrar.onclick = function() {
        const ventanaId = cerrar.getAttribute('data-cerrar'); // Obtén el ID desde el atributo

        // Valida que el ID y el elemento existan antes de modificar clases
        if (ventanaId && document.getElementById(ventanaId)) {
            document.getElementById(ventanaId).classList.remove('active');
            areaCerrar.classList.remove('active');
        } else {
            console.error(`La ventana con ID "${ventanaId}" no existe.`);
        }
    };
});

// Cierra todas las ventanas al hacer clic fuera de ellas
areaCerrar.onclick = function() {
    const ventanas = document.querySelectorAll('.ventana-emergente');

    // Asegúrate de que todas las ventanas cierren correctamente
    ventanas.forEach(ventana => {
        ventana.classList.remove('active');
    });

    // Oculta el área para cerrar
    areaCerrar.classList.remove('active');
};
