import { setActiveBullet } from '../components/slideLoaded';
import { themeChange } from '../components/slideChange';
import { countChange, countMax } from '../components/slide-count';
import { restartAnimation } from '../components/animation-restart';
import { getThemeColor } from "../components/localStorage";
import { cssNumber } from 'jquery';

let swiperText = new Swiper('.main-slider__swiper-text', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  runCallbacksOnInit: true,
  initialSlide: +`${localStorage.getItem('indexSlide')}` > 0 ? +`${localStorage.getItem('indexSlide')}` : 0,

  autoplay: {
    delay: 12000,
    disableOnInteraction: true,
  },

  speed: 150,

  mousewheelControl: true,
  draggable: true,
  uniqueNavElements: true,

  pagination: {
    el: '.nav-list',
    type: 'custom',
    clickable: true,
    bulletClass: 'nav-item',
    bulletActiveClass: 'active-link',
  },

  breakpoints: {
    320: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    1023: {

    }
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
    let modal = document.querySelector('.modal');

    if (!modal.classList.contains('is-active')) {
      swiperText.autoplay.stop();
<<<<<<< HEAD
=======
      setPauseOnAutoplay()
>>>>>>> 01b4a6bc68152e61ffe5c2fcbf704e6342f1ff52

    } else {
      swiperText.autoplay.start()
      restartAnimation();
    }
  })
})


