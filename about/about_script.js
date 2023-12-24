const menu = document.querySelector('.menu');
const menubar = document.querySelector('#mobile-menu');

const mobile = () => {
    menu.classList.toggle('active');
    menubar.classList.toggle('is-active');
}

menubar.addEventListener('click', mobile);s