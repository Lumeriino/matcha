const scroll = new LocomotiveScroll({
    el: document.querySelector("#direction"),
    smooth: true,
});

// inicio
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login submitted!");
});
