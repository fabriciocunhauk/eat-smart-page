const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('side-menu');

burgerMenu.addEventListener('click', handleMenu);

const menuView = document.createElement('div');
menuView.classList.add('burger-menu-div');
sideMenu.appendChild(menuView)

let menuEvent = false;

function handleMenu() {
    if (!menuEvent) {
        menuEvent = true;
        menuOpen();
    } else {
        menuEvent = false;
        menuClose();
    }
};

function menuOpen() {
    menuView.style.width = '500px';
};

function menuClose() {
    menuView.style.width = '0';
};