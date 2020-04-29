const menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('.nav');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('nav-open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('nav-open');
        menuOpen = false;
    }
});