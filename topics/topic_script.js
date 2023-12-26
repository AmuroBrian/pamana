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
    }),
    {
        threshold: 1,
    }
})

observerLeft.observe(slides[0]);
observerLeft.observe(slides[2]);
observerLeft.observe(description[1]);
observerLeft.observe(description[3]);
observerLeft.observe(slides[4]);

const observerRight = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("showRight", entry.isIntersecting);
    }),
    {
        threshold: 1,
    }
})

observerRight.observe(slides[1]);
observerRight.observe(slides[3]);
observerRight.observe(description[0]);
observerRight.observe(description[2]);
observerRight.observe(description[4]);

const precolonial = document.querySelector('#precolonial');
const spanish = document.querySelector('#spanish');
const american = document.querySelector('#american');
const postwar = document.querySelector('#postwar');
const modern = document.querySelector('#modern');

precolonial.addEventListener('click',() => {
    window.location.href = "../precolonial/precolonial.html";
})

spanish.addEventListener('click', ()=>{
    window.location.href = "../spanish/spanish.html";
})

american.addEventListener('click', ()=>{
    window.location.href = "../american/american.html";
})

postwar.addEventListener('click', ()=>{
    window.location.href = "../postwar/postwar.html";
})

modern.addEventListener('click', ()=>{
    window.location.href = "../modern/modern.html";
})