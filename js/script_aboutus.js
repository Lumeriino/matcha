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
