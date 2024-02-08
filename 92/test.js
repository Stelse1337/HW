const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');

document.addEventListener('click', button);

function button(event) {
    if (event.target.closest('.btn-open')) {
        modal.classList.add('_active');
        wrapper.classList.add('_active');
    } else if (event.target.closest('.modal__close-btn')) {
        modal.classList.remove('_active');
        wrapper.classList.remove('_active');
    }
}
