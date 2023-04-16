
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
  document.body.classList.add('lock')
})

modalBtnOpenMobile.addEventListener('click', () => {
  modal.classList.add('active')
  menu.classList.remove('active')
  mobileMenuOpen.classList.remove('active')
  mobileMenuClose.classList.remove('active')
  document.body.classList.add('lock')
})

modalBtnClose.addEventListener('click', () => {
  modal.classList.remove('active')
  document.body.classList.remove('lock')
})

modal.addEventListener('click', () => {
  modal.classList.remove('active')
  document.body.classList.remove('lock')
})

modalContent.addEventListener('click', (e) => {
  e.stopPropagation()
})

const productsModal = document.querySelector('.products-modal')
const productsModalOpenBtn = document.querySelectorAll('.products__box-link')
const productsModalCloseBtn = document.querySelector('.products-modal__btn')

productsModalOpenBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    productsModal.classList.add('active')
    document.body.classList.add('lock')
  })
});


productsModalCloseBtn.addEventListener('click', () => {
  productsModal.classList.remove('active')
  document.body.classList.remove('lock')
})
productsModal.addEventListener('click', () => {
  productsModal.classList.remove('active')
  document.body.classList.remove('lock')
})





const smoothLinks = document.querySelectorAll('.nav__link');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    menu.classList.remove('active')
    mobileMenuOpen.classList.remove('active')
    mobileMenuClose.classList.remove('active')
  });
};

