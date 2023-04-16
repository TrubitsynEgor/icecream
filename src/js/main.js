import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


'use-strict'

const smoothLinks = document.querySelectorAll('.nav__link');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  if (scroll > 500) {
    document.querySelector('.header').classList.add('fixed')
  }
  if (scroll < 500) {
    document.querySelector('.header').classList.remove('fixed')
  }
})








