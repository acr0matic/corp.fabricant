const homePortfolio = new Swiper('#slider-portfolio-home .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  on: {
    afterInit: (instance) => {
      const control = instance.el.closest('.slider').querySelectorAll('.swiper-control .button');
      control.forEach(button => {
        button.addEventListener('click', (e) => {
          instance.slideTo(button.dataset.index);

          control.forEach(el => el.classList.remove('swiper-button--active'));
          button.classList.add('swiper-button--active');
        });
      });
    }
  }
})

const sliderCallback = new Swiper('#slider-callback .swiper', {
  simulateTouch: false,
  allowTouchMove: false,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '#slider-callback .swiper-button-next',
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
