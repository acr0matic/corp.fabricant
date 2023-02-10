const sliderHomePortfolio = document.getElementById('slider-portfolio-home');
if (sliderHomePortfolio) {
  const control = sliderHomePortfolio.querySelectorAll('.swiper-control .button');

  new Swiper(sliderHomePortfolio.querySelector('.swiper'), {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    on: {
      afterInit: (instance) => {
        control.forEach(button => {
          button.addEventListener('click', (e) => {
            instance.slideTo(button.dataset.index);

            control.forEach(el => el.classList.remove(StyleСlass.slider.active));
            button.classList.add(StyleСlass.slider.active);
          });
        });
      }
    }
  })
}

const sliderFacility = document.getElementById('slider-facility');
if (sliderFacility) {
  const control = sliderFacility.querySelectorAll('.button');

  new Swiper(sliderFacility.querySelector('.swiper'), {
    autoHeight: true,
    simulateTouch: false,
    allowTouchMove: false,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    on: {
      init: (instance) => {
        for (let index = 0; index < instance.slides.length; index++) {
          control[index].dataset.index = index;
        }
      },

      afterInit: (instance) => {
        control.forEach(button => {
          button.addEventListener('click', (e) => {
            instance.slideTo(button.dataset.index);

            control.forEach(el => el.classList.remove(StyleСlass.slider.active));
            button.classList.add(StyleСlass.slider.active);
          });
        });
      }
    }
  });
}

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

const sliderFacilityRelated = new Swiper('#slider-facility-related .swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
})