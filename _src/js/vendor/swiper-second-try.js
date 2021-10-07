import { setActiveBullet } from '../components/slideLoaded';
import { themeChange } from '../components/slideChange';
import { countChange, countMax } from '../components/slide-count';
import { restartAnimation } from '../components/animation-restart';
import { getThemeColor } from "../components/localStorage";
import { cssNumber } from 'jquery';

let swiperText = new Swiper('.main-slider__swiper-text', {
  loop: true,
  // slidesPerView: 'auto',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  initialSlide: +`${localStorage.getItem('indexSlide')}` > 0? +`${localStorage.getItem('indexSlide')}` : 0,

  watchOverflow: true,

  autoplay: {
    delay: 12000,
    disableOnInteraction: true,
  },

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
    beforeInit: function() {
      getThemeColor();
    },

    init: function() {
      setActiveBullet();
      countMax();
    },

    slideChangeTransitionEnd: function() {
      countChange();
    },

    slideChangeTransitionStart: function() {
      themeChange();
      restartAnimation();
    },

    slideChange: function(swiper) {
      swiper.autoplay.stop();
      swiper.autoplay.start();
    }
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

let btns = document.querySelectorAll('.btns');

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    let modal = document.querySelector('.modal'),
        timeStop;

    if (!modal.classList.contains('is-active')) {
      swiperText.autoplay.stop();
      setPauseOnAutoplay()
      timeStop = new Date();

    } else {
      swiperText.autoplay.start()
      restartAnimation();
    }
  })
})


