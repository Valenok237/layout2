const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
};


const menu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__list');
const burgerMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.header__menu-close');
burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__menu-active');
});
menuList.addEventListener('click', () => {
    menu.classList.remove('header__menu-active');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('header__menu-active');
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});