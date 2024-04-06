const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', () => {
	if (document.body.className == 'body') {
		document.body.classList.add('body--opened-menu');
	} else {
		document.body.classList.remove('body--opened-menu');
	}
});


const modal = document.querySelector('.modal');
const gift = document.querySelector('.about__img-button');
gift.addEventListener('click', () => {
	modal.style.display = 'flex';
});

const modalCancel = document.querySelector('.modal__cancel');
modalCancel.addEventListener('click', () => {
	modal.style.display = 'none';
});