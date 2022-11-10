const menuBtn = document.querySelector('.menu-btn');
const toggler = document.querySelector('.menu-btn__hamburger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if(!showMenu) {
        toggler.classList.add('open');
        showMenu = true;
    } else {
        toggler.classList.remove('open');
        showMenu = false;
    }
};