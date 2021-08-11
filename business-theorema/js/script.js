document.addEventListener("DOMContentLoaded", function () {

  const body = document;

  const swiperMain = new Swiper('.main-slider', {
    // direction: 'vertical',
    // loop: true,
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
      clickable: true,
      type: 'custom',
      el: '.nav-list',
      bullets: '.nav-item',
      bulletClass: 'nav-item',
    },

    mousewheel: {
      thresholdDelta: 1,
      // eventsTarget: body,
    },

    // slideClass: '.main-slider__item',

    on: {
      init: function () {
        console.log('init')
      },
    }


  });

  swiperMain.on('slideChange', function () {
    let root = document.documentElement,
    slides = document.querySelectorAll('.swiper-slide'),
    currentSlide = document.querySelector('.swiper-slide-active'),
    nextSlide = currentSlide.nextElementSibling;

        switch(nextSlide.dataset.color) {
          case 'red':
            root.style.setProperty('--color-theme', "#ff4d4d");
            console.log(currentSlide.dataset.color)
            break;

          case 'blue':
            root.style.setProperty('--color-theme', "#0085ff");
            console.log(currentSlide.dataset.color)
            break;

          case 'green':
            root.style.setProperty('--color-theme', "#4bc357");
            console.log(currentSlide.dataset.color)
            break;

          case 'yellow':
            root.style.setProperty('--color-theme', '#ffbf1c');
            console.log(currentSlide.dataset.color)
            break;

          case 'purple':
            root.style.setProperty('--color-theme', "#aa4ef2");
            console.log(currentSlide.dataset.color)
            break;

          default:
            break;
        }
  })

});
