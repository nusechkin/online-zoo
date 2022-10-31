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