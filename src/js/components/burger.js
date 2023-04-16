
const mobileMenuOpen = document.querySelector('.mobile-menu--open');
const mobileMenuClose = document.querySelector('.mobile-menu--close');
const menu = document.querySelector('.nav')


mobileMenuOpen.addEventListener('click', () => {
  mobileMenuOpen.classList.add('active')
  mobileMenuClose.classList.add('active')
  menu.classList.add('active')
})
mobileMenuClose.addEventListener('click', () => {
  mobileMenuOpen.classList.remove('active')
  mobileMenuClose.classList.remove('active')
  menu.classList.remove('active')
})



const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnClose = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const modalBtnOpenMobile = document.querySelector('.open-mobile-modal');

modalBtnOpen.addEventListener('click', () => {
  modal.classList.add('active')
  menu.classList.remove('active')
  mobileMenuOpen.classList.remove('active')
  mobileMenuClose.classList.remove('active')
})

modalBtnOpenMobile.addEventListener('click', () => {
  modal.classList.add('active')
  menu.classList.remove('active')
  mobileMenuOpen.classList.remove('active')
  mobileMenuClose.classList.remove('active')
})

modalBtnClose.addEventListener('click', () => {
  modal.classList.remove('active')
})
modal.addEventListener('click', () => {
  modal.classList.remove('active')
})
modalContent.addEventListener('click', (e) => {
  e.stopPropagation()
})

