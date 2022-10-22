'use strict';
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay')
const openModalBtns = document.querySelectorAll('button.show-modal');
console.log(openModalBtns);
// Display modal logic
for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
// close modal logic
closeModalBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});