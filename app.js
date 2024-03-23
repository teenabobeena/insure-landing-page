const hamburger = document.querySelector('.hamburger-menu');

const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
})
