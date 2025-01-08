// ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById('anim');
    const lastChildDiv = document.querySelector('#animation div div:last-child');
    let isAnimating = false; 

    function animateOnScroll() {
        const imgPosition = img.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (imgPosition < screenHeight && !isAnimating) {
            isAnimating = true; // Marca que la animación está en progreso
            img.style.opacity = "1"; // Asegura que la imagen sea visible

            // Calcula el ancho del div considerando el padding
            const computedStyle = getComputedStyle(lastChildDiv);
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);
            const availableWidth = lastChildDiv.offsetWidth - paddingLeft - paddingRight - img.offsetWidth;

            // Asegúrate de que la distancia sea positiva
            if (availableWidth > 0) {
                // Crea la animación
                anime.timeline({
                    targets: '#anim',
                    easing: 'easeInOutQuad',
                    duration: 2000,
                    complete: () => {
                        isAnimating = false; // Permite nuevas animaciones después de completar
                    },
                })
                .add({
                    translateX: availableWidth, // Mueve la imagen dentro del espacio disponible
                    rotate: '1turn', // Rotación completa
                    // scale: 1.5,
                })
                .add({
                    translateX: 0, // Regresa a la posición inicial
                    rotate: '0turn',
                    // scale: 1, // Vuelve al tamaño inicial
                });
            }
        }
    }

    // Agrega el event listener para el scroll
    window.addEventListener('scroll', animateOnScroll);
});

// SUBS
$("#subscribeForm").on("submit", function(event) {
    event.preventDefault();
    
    $("#user").val("");
    alert("Thanks for subscribing!");
});
