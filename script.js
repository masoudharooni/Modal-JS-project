'use strict';
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay')
const openModalBtns = document.querySelectorAll('button.show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// Display modal logic
for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener('click', openModal);
}
// close modal logic
closeModalBtn.addEventListener('click', closeModal);
// close modal when clicked outside of it
overlay.addEventListener('click', closeModal);
// close modal with ESC keyboard button
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        closeModal();
    }
});