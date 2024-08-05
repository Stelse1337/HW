document.addEventListener('click', burgerInit)
	function burgerInit(e) {
		const burgerIcon = e.target.closest('.burger-icon')
		const burgerNavLink = e.target.closest('.navigation--link')
		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 600) return
		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}


	// Модалка
	const modal = document.querySelector('.modal')
	const modalButton = document.querySelector('.header__hero-question')
	modalButton.addEventListener('click', openModal)
	modal.addEventListener('click', closeModal)
	function openModal(e) {
		e.preventDefault()
		document.body.classList.toggle('body--opened-modal')
	}
	function closeModal(e) {
		e.preventDefault()
		const target = e.target
		if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
			document.body.classList.remove('body--opened-modal')
		}
	}


const tabControls = document.querySelector('.services__tabs')
tabControls.addEventListener('click', toggleTab)
function toggleTab(e) {
  const tabControl = e.target.closest('.services__tab')
  if (!tabControl) return
  e.preventDefault()
  if (tabControl.classList.contains('tab__control--active')) return
  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const activeControl = document.querySelector('.tab__control--active')
  const activeContent = document.querySelector('.tab-active')
  if (activeControl) {
    activeControl.classList.remove('tab__control--active')
  }
  if (activeContent) {
    activeContent.classList.remove('tab-active')
  }
  tabControl.classList.add('tab__control--active')
  tabContent.classList.add('tab-active')
}


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: '30',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
