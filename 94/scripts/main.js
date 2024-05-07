// Бургер
const burgerIcon = document.querySelector('.burger-icon');
burgerIcon.addEventListener('click', () => {
	if (document.body.className == 'body') {
		document.body.classList.add('body--opened-menu');
	} else {
		document.body.classList.remove('body--opened-menu');
	}
});


// Модалка
const modal = document.querySelector('.modal');
const gift = document.querySelector('.about__img-button');
gift.addEventListener('click', () => {
	modal.style.display = 'flex';
});

const modalCancel = document.querySelector('.modal__cancel');
modalCancel.addEventListener('click', () => {
	modal.style.display = 'none';
});


// Табы
const tabControls = document.querySelector('.tab-controls');
tabControls.addEventListener('click', toggleTab);
function toggleTab(e) {
	const tabButton = e.target.closest('.tab-controls__link');
	if (!tabButton) return;
	e.preventDefault();
	if (tabButton.classList.contains('tab-controls__link--active')) return;

	const tabContentId = tabButton.getAttribute('href');
	const tabContent = document.querySelector(tabContentId);
	const activeButton = document.querySelector('.tab-controls__link--active');
	const activeContent = document.querySelector('.tab-content--show');

	tabContent.classList.add('tab-content--show');
	tabButton.classList.add('tab-controls__link--active');

	activeContent.classList.remove('tab-content--show');
	activeButton.classList.remove('tab-controls__link--active');
}

// Аккордеон
const accordionLists = document.querySelectorAll('.accordion-list');
accordionLists.forEach(el => {
	el.addEventListener('click', (e) => {
		const accordionList = e.currentTarget;
		const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
		const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

		const accordionControl = e.target.closest('.accordion-list__control');
		if (!accordionControl) return;
		const accordionItem = accordionControl.parentElement;
		const accordionContent = accordionControl.nextElementSibling;

		if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
			accordionOpenedItem.classList.remove('accordion-list__item--opened');
			accordionOpenedContent.style.maxHeight = null;
		}
		accordionItem.classList.toggle('accordion-list__item--opened');

		if (accordionItem.classList.contains('accordion-list__item--opened')) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
		} else {
			accordionContent.style.maxHeight = null;
		}
	});
});