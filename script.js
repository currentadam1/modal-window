'use strict';
//Select the Dom element 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

function closeModalFn () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
function showModalFn () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

// console.log(showModalFn);

for (let i = 0; i < showModal.length; i++) {
    // console.log(modal[i]);
    showModal[i].addEventListener('click', showModalFn);

}

closeModal.addEventListener('click', closeModalFn);
overlay.addEventListener('click', closeModalFn);

/**Key event 
 * key up - when you lift your finger off a button.
 * key press-when a button is pressed continously.
 * key down - exactly when you press a button.
  
**/


document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key === 'Escape') {
        if (modal.classList.contains('hidden') === false) {
            closeModalFn()
        }
    }
})



