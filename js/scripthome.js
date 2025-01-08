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

// BACKGROUND
const header = document.querySelector('header');
const images = [
    "media/img/img1.jpg",
    "media/img/img1_2.jpg",
    "media/img/img1_3.jpg",
    "media/img/img1_4.jpg"
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Cicla entre 0 y la longitud del array
    header.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Cambiar la imagen cada 3 segundos
setInterval(changeBackground, 2000);

// SCROLL
window.addEventListener('scroll', () => {
    const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    
    document.querySelectorAll(".rotatingImage").forEach((img)=> {img.style.setProperty('--scroll', scrollValue);
    });
});