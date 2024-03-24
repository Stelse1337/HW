const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', () => {
	if (document.body.className == 'body') {
		document.body.classList.add('body--opened-menu');
	} else {
		document.body.classList.remove('body--opened-menu');
	}
});