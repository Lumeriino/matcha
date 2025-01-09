const scroll = new LocomotiveScroll({
    el: document.querySelector("#direction"),
    smooth: true,
});

// Inicio
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada.
    alert("Login submitted!"); // Muestra un mensaje de confirmación.
    
    // Redirige al usuario al home.
    window.location.href = "indexhome.html";
});
