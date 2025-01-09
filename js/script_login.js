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

const scroll = new LocomotiveScroll({
    el: document.querySelector("#direction"),
    smooth: true,
});

// inicio
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login submitted!");
});
