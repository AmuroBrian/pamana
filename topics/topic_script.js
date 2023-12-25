const menu = document.querySelector('.menu');
const menubar = document.querySelector('#mobile-menu');

const mobile = () => {
    menu.classList.toggle('active');
    menubar.classList.toggle('is-active');
}

menubar.addEventListener('click', mobile);

const slides = document.querySelectorAll(".topic__image");
const description = document.querySelectorAll(".description");

const observerLeft = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("showLeft", entry.isIntersecting);
    })
})

observerLeft.observe(slides[0]);
observerLeft.observe(slides[2]);
observerLeft.observe(slides[4]);
observerLeft.observe(description[1]);
observerLeft.observe(description[3]);

const observerRight = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("showRight", entry.isIntersecting);
    })
})

observerRight.observe(slides[1]);
observerRight.observe(slides[3]);
observerRight.observe(description[0]);
observerRight.observe(description[2]);
observerRight.observe(description[4]);