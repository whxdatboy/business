import { setActiveBullet } from '../components/slideLoaded';
import { themeChange } from '../components/slideChange';
import { countChange, countMax } from '../components/slide-count';
import { restartAnimation } from '../components/animation-restart'

const storageIndexSlide = `${localStorage.getItem('indexSlide')}`;

let swiperText = new Swiper('.main-slider__swiper-text', {
  loop: true,
  // slidesPerView: 'auto',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  watchOverflow: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  initialSlide: storageIndexSlide,

  speed: 150,
  spaceBetween: 30,

  mousewheelControl: true,
  draggable: true,
  uniqueNavElements: true,
  centeredSlides: true,

  pagination: {
    el: '.nav-list',
    type: 'custom',
    clickable: true,
    bulletClass: 'nav-item',
    bulletActiveClass: 'active-link',
  },

  mousewheel: {
    thresholdDelta: 100,
  },

  on: {
    init: function() {
      setActiveBullet()
      countMax()
    },

    slideChangeTransitionStart: function() {
      themeChange();
    },

    transitionStart: function() {
      countChange();
      restartAnimation();
    },
  }

});

let swiperImg = new Swiper('.main-slider__swiper-img', {
  slidesPerView: 'auto',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  speed: 150,

  mousewheelControl: true,
  draggable: true,
  uniqueNavElements: true,

  mousewheel: {
    thresholdDelta: 100,
  },

  pagination: {
    el: '.main-slider__swiper-pagination',
    type: 'custom',
    clickable: true,
    bulletClass: 'svg-nav__element',
    bulletActiveClass: 'active-link',
  },

  on: {
    slideChangeTransitionStart: function(swiper) {
      themeChange();
    }
  }
})

swiperText.controller.control = swiperImg;
swiperImg.controller.control = swiperText;

let btns = document.querySelectorAll('.btns')

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    let modal = document.querySelector('.modal');

    if (!modal.classList.contains('is-active')) {
      swiperText.autoplay.stop();
      console.log('autoplay stoped')
    } else {
      swiperText.autoplay.start()
      console.log('autoplay started')
    }

  })
})
