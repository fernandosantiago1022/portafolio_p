// script.js

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-up, .slide-in-left');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase para activar la animación
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
            }
        });
    }, { threshold: 0.5 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    
});
