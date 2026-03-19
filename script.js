// script.js - Interactividad de la página de prueba

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('myButton');

    if (button) {
        button.addEventListener('click', function () {
            alert('¡Botón clickeado! La interactividad funciona correctamente.');
            button.textContent = '¡Haz clic de nuevo!';
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';
        });
    }

    // Animación de entrada para los elementos
    const elementos = document.querySelectorAll('h1, p, button, img');
    elementos.forEach(function (el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(function () {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 150);
    });

    console.log('script.js cargado correctamente.');
});
