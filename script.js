const menuMobile = document.querySelector('.menu-mobile')
const nav = document.querySelector('header nav ul')
menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
})