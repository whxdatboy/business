document.addEventListener("DOMContentLoaded", function () {
  const swiperMain = new Swiper('.main-slider', {
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
            break;

          case 'blue':
            root.style.setProperty('--color-theme', "#0085ff");
            break;

          case 'green':
            root.style.setProperty('--color-theme', "#4bc357");
            break;

          case 'yellow':
            root.style.setProperty('--color-theme', '#ffbf1c');
            break;

          case 'purple':
            root.style.setProperty('--color-theme', "#aa4ef2");
            break;

          default:
            break;
        }

        countCurrent += arrSlides.indexOf(currentSlide);

        mainProgress.value = countCurrent;
        mainProgressCount.innerText = `0${countCurrent}`;

        if (countCurrent == 0) {
          countCurrent = 1;
        } else {
          return countCurrent
        }
      }
    }


  });
})
