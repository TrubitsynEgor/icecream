
const cards = document.querySelectorAll('.modal__cards-item').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('active'))
})

