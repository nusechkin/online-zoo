window.addEventListener('load', () => {
    document
        .querySelector('.slider-window');
    document.dispatchEvent(new Event('petCardSlider'));
});

document.addEventListener('petCardSlider', () => {
    document.querySelectorAll('.pet-card').forEach((petCard) => {
        petCard.onmouseover = (e) => {
            petCard.classList.add('hovered');
        };
        petCard.onmouseout = (e) => {
            petCard.classList.remove('hovered');
        };
    });
});

const burgerMenu = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu-body');

window.addEventListener('load', () => {
    document
        .querySelector('.slider-window');
    document.dispatchEvent(new Event('petCardSlider'));
});

document.addEventListener('petCardSlider', () => {
    document.querySelectorAll('.pet-card').forEach((petCard) => {
        petCard.onmouseover = (e) => {
            petCard.classList.add('hovered');
        };
        petCard.onmouseout = (e) => {
            petCard.classList.remove('hovered');
        };
    });
});

burgerMenu.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    //headerLogo.classList.toggle('logo');
  });