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

    // Asegurar estado del menú al cargar la página
    function handleResize() {
        if (window.innerWidth > 768) {
            menu.style.display = "flex"; // Mostrar menú en pantallas grandes
            menu.classList.remove("active"); // Eliminar clase activa
        } else {
            menu.style.display = "none"; // Ocultar menú en pantallas pequeñas
        }
    }

    // Alternar visibilidad del menú
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    // Detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Ejecutar al cargar la página
    handleResize();
});



