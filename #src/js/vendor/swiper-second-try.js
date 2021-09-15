import { setActiveBullet } from '../components/slideLoaded';
import {themeChange} from '../components/slideChange'

const storageIndexSlide = `${localStorage.getItem('indexSlide')}`;

let swiperText = new Swiper('.main-slider__swiper-text', {
  loop: true,
  // slidesPerView: 'auto',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
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
    },

    slideChangeTransitionStart: function() {
      themeChange();
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
