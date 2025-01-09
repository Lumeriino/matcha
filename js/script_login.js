const scroll = new LocomotiveScroll({
    el: document.querySelector("#direction"),
    smooth: true,
});

// Inicio

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario.

    // Obtén los valores de los campos del formulario.
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verifica si alguno de los campos está vacío.
    if (!username || !password) {
        alert("Complete the form!");
        return; // Detiene la ejecución si los campos no están completos.
    }

    // Si los campos están completos, muestra el mensaje de confirmación.
    alert("Login submitted!");

    // Redirige al usuario al home.
    window.location.href = "indexhome.html";
});
