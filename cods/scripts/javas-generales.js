// Estilos de texto en movimiento
const texts = [
    document.getElementById('texto1'),
    document.getElementById('texto2'),
    document.getElementById('texto3'),
    document.getElementById('texto4'),
    document.getElementById('texto5')
];

const observerOptions = {
    root: null, // Observa los cambios en el viewport
    threshold: 0.1 // El 10% del elemento debe ser visible para activar el callback
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target;
            const index = texts.indexOf(text);
            setTimeout(() => {
                text.style.opacity = 1;
                text.style.transform = 'translateX(0)';  /* Mover al centro */
            }, index * 1000);  /* Intervalo de 1 segundo entre cada texto */
        } else {
            const text = entry.target;
            text.style.opacity = 0;
            text.style.transform = 'translateX(-100%)';  /* Volver a la posición inicial */
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

texts.forEach(text => {
    observer.observe(text);
});

// ir arriba