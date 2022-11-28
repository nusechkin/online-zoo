const burgerMenu = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu-body');

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    //headerLogo.classList.toggle('logo');
  });