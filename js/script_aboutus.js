// MENU
function changeOpacity() {
    var scroll = window.scrollY;

    var menu = document.getElementById("menu").clientHeight;

    var max_scroll = window.innerHeight - menu;

    if (scroll <= max_scroll) {
        var opacity = scroll / max_scroll;

        var menuElem = document.getElementById("menu");
        menuElem.style.backgroundColor = "rgb(255, 255, 255, " + opacity + ")";
        menuElem.style.color = "white";

    }
}

window.onscroll = function () {
    changeOpacity();
}

document.addEventListener("DOMContentLoaded", function () {

    function goBlack() {
        var menu = document.getElementById("menu");
        menu.style.backgroundColor = "white";
    }

    var links = document.querySelectorAll("#menu a[href^='#']");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", goBlack);
    }
});
// menu hamburguesa

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu_b");

    // Asegurarnos de que el menú vuelva al diseño original en pantallas grandes
    function handleResize() {
        if (window.innerWidth > 768) {
            menu.style.display = "flex"; // Diseño original
            menu.classList.remove("active"); // Quitar clase activa
        } else {
            menu.style.display = "none"; // Ocultar menú hamburguesa
        }
    }

    // Alternar visibilidad del menú en pantallas pequeñas
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    // Detectar cambios de tamaño de pantalla
    window.addEventListener("resize", handleResize);

    // Ejecutar al cargar la página
    handleResize();
});



document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const response = item.querySelector('.faq-response');

        item.addEventListener('click', () => {
            if (response.style.display === 'block') {
                response.style.display = 'none';
                toggle.textContent = '+';
            } else {
                response.style.display = 'block';
                toggle.textContent = '−';
            }
        });
    });
});
