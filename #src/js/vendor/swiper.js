export const swiperMain = new Swiper('.main-slider', {
  // direction: 'vertical',
  loop: true,
  effect: 'fade',
  slidesPerView: 1,
  autoplay: false,
  draggable: false,
  mousewheelControl: true,
  simulateTouch: false,
  // delay: 200,
  setWrapperSize: false,

  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    type: 'custom',
    el: '.nav-list',
    bullets: '.nav-item',
    bulletClass: 'nav-item',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },

  mousewheel: {
    thresholdDelta: 1,
  },

  on: {
    init: function () {

      let slides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'),
      mainProgressMax = document.querySelector('.pagination-max'),
      count = 0;

      slides.forEach(slide => {
        count += 1;
      });

      mainProgressMax.innerText = `0${count}`;
    },

    slideChangeTransitionStart: function () {
      let root = document.documentElement,
      currentSlide = document.querySelector('.swiper-slide-active'),
      countCurrent = 1,
      slides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'),
      arrSlides = Array.from(slides),
      mainProgress = document.querySelector('progress'),
      mainProgressCount = document.querySelector('.pagination-count');

      switch(currentSlide.dataset.color) {
        case 'red':
          root.style.setProperty('--color-theme', "#ff4d4d");
          countCurrent = 1;
          break;

        case 'blue':
          root.style.setProperty('--color-theme', "#0085ff");
          countCurrent = 2;
          break;

        case 'green':
          root.style.setProperty('--color-theme', "#4bc357");
          countCurrent = 3;
          break;

        case 'yellow':
          root.style.setProperty('--color-theme', '#ffbf1c');
          countCurrent = 4;
          break;

        case 'purple':
          root.style.setProperty('--color-theme', "#aa4ef2");
          countCurrent = 5;
          break;

        default:
          break;
      }

      // if (countCurrent == 0) {
      //   countCurrent = 1 + arrSlides.indexOf(currentSlide);
      // } else {
      //   countCurrent += arrSlides.indexOf(currentSlide);
      // }

      // console.log(countCurrent)

      mainProgress.value = countCurrent;
      mainProgressCount.innerText = `0${countCurrent}`;


    },

    beforeTransitionStart: function () {
      const $currentSlide = $('.swiper-slide-active');
      $currentSlide.find('.main-slider__left-content').removeClass('is-active');
      $currentSlide.find('.main-slider__modal-services').removeClass('is-active');
    }
  }


});
