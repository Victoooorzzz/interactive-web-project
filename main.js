
// main.js - Lógica JavaScript para funcionalidades interactivas

// 1. Menú Desplegable (Ejemplo simple)
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                dropdownMenu.classList.toggle('show');
            }
        });
    });

    // Cerrar dropdown si se hace clic fuera
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdownToggles.forEach(toggle => {
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu') && dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                }
            });
        }
    });
});

// 2. Carrusel Simple (Ejemplo básico, requiere HTML con .carousel-item y .carousel-inner)
let slideIndex = 0;
const showSlides = () => {
    let i;
    const slides = document.querySelectorAll('.carousel-item');
    if (slides.length === 0) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Cambia imagen cada 3 segundos
};
document.addEventListener('DOMContentLoaded', showSlides);

// 3. Validación de Formulario (Ejemplo básico para un campo de email)
const validateForm = (event) => {
    const emailInput = document.getElementById('email'); // Asume un input con id="email"
    if (!emailInput) return;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Por favor, introduce un email válido.');
        event.preventDefault(); // Evita que el formulario se envíe
        return false;
    }
    return true;
};
// Asume un formulario con id="myForm" y un botón de submit
const myForm = document.getElementById('myForm');
if (myForm) {
    myForm.addEventListener('submit', validateForm);
}

// 4. Efecto de desplazamiento (Scroll-to-top button)
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn'); // Asume un botón con id="scrollToTopBtn"

    if (scrollToTopBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        };

        scrollToTopBtn.addEventListener('click', () => {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
        });
    }
});
