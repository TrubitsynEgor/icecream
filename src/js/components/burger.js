
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
const modalContent = document.querySelectorAll('.modal__content')
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
modalContent.forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation()
  })
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


const madeModal = document.querySelector('.made-modal')
const madeModalOpenBtn = document.querySelector('.made__box-btn')
const madeModalCloseBtn = document.querySelector('.made-modal__btn')

madeModalOpenBtn.addEventListener('click', (e) => {
  e.preventDefault()
  madeModal.classList.add('active')
  document.body.classList.add('lock')
})


madeModalCloseBtn.addEventListener('click', () => {
  madeModal.classList.remove('active')
  document.body.classList.remove('lock')
})
madeModal.addEventListener('click', () => {
  madeModal.classList.remove('active')
  document.body.classList.remove('lock')
})


const locationModal = document.querySelector('.modal__location')
const locationModalBtnClose = document.querySelector('.modal__location-btn')
const locationModalBtnOpen = document.querySelector('.contacts__btn-location')

locationModalBtnOpen.addEventListener('click', (e) => {
  locationModal.classList.add('active')
  document.body.classList.add('lock')
})


locationModalBtnClose.addEventListener('click', () => {
  locationModal.classList.remove('active')
  document.body.classList.remove('lock')
})
locationModal.addEventListener('click', () => {
  locationModal.classList.remove('active')
  document.body.classList.remove('lock')
})

const franchiseModal = document.querySelector('.modal__franchise')
const franchiseModalCloseBtn = document.querySelector('.modal__franchise-btn')
const franchiseModalOpenBtn = document.querySelector('.contacts__btn-franchise')

franchiseModalOpenBtn.addEventListener('click', (e) => {
  franchiseModal.classList.add('active')
  document.body.classList.add('lock')
})


franchiseModalCloseBtn.addEventListener('click', () => {
  franchiseModal.classList.remove('active')
  document.body.classList.remove('lock')
})
franchiseModal.addEventListener('click', () => {
  franchiseModal.classList.remove('active')
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

const heroLinks = document.querySelectorAll('.hero__btn');
for (let smoothLink of heroLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });
};



