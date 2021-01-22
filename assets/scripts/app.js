const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('menu-container');
const burgerMenuDiv = document.querySelector('.burger-menu-div');

burgerMenu.addEventListener('click', handleMenu);

let menuEvent = false;

function handleMenu() {
    if (!menuEvent) {
        menuEvent = true;
        menuOpen();
    } else {
        menuClose();
        menuEvent = false;
    }
};

function menuOpen() {
    burgerMenuDiv.style.width = '300px';
};

function menuClose() {
    burgerMenuDiv.style.width = '0';
};