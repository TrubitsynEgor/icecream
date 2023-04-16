import { Swiper, Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);


const feedbackSlider = new Swiper('.feedback__slider', {
  loop: true,
  slidesPerView: 1,
  effect: "fade",

});

const commentsSlider = new Swiper('.feedback__comments', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});
