const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('side-menu');

burgerMenu.addEventListener('click', handleMenu);

const menuView = document.createElement('div');
menuView.classList.add('burger-menu-div');
sideMenu.appendChild(menuView)

const a = document.createElement('a');
const linkText = document.createTextNode("Diet");
a.classList.add("link");
a.appendChild(linkText);
a.href = '#middle-section';
menuView.appendChild(a);

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
    menuView.style.width = '500px';
};

function menuClose() {
    menuView.style.width = '0';
};