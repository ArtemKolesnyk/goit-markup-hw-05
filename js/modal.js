const heroButtonRef = document.querySelector('.js-hero-button');
const wrapperPopupRef = document.querySelector('.js-wrapper-popup');
const closePopupRef = document.querySelector('.js-close-popup');

heroButtonRef.addEventListener('clik', togglePopup);

function togglePopup() {
    wrapperPopupRef.classList.toggle('open');
}