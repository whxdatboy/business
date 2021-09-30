// let indexSlide = localStorage.getItem('indexSlide');

// export const swiperMain = new Swiper('.main-slider', {
//   loop: true,
//   effect: 'fade',
//   slidesPerView: 1,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   draggable: true,
//   mousewheelControl: true,
//   simulateTouch: false,
//   setWrapperSize: false,
//   initialSlide: indexSlide,

//   fadeEffect: {
//     crossFade: true,
//   },

//   uniqueNavElements: true,

  // pagination: {
  //   el: '.nav-list',
  //   type: 'custom',
  //   clickable: true,
  //   bulletClass: 'nav-item',
  //   bulletActiveClass: 'nav-item-active',
  // },

//   mousewheel: {
//     thresholdDelta: 1,
//   },

//   on: {
//     init: function() {
//       let slides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'),
//       mainProgressMax = document.querySelector('.pagination-max'),
//       count = 0;

//       slides.forEach(slide => {
//         count += 1;
//       });

//       mainProgressMax.innerText = `0${count}`;
//     },

//     slideChangeTransitionStart: function () {

//       let root = document.documentElement,
//       currentSlide = document.querySelector('.swiper-slide-active'),
//       countCurrent = 1,
//       slides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'),
//       arrSlides = Array.from(slides),
//       mainProgress = document.querySelector('progress'),
//       mainProgressCount = document.querySelector('.pagination-count');

//       switch(currentSlide.dataset.color) {
//         case 'red':
//           document.body.className = '';
//           document.body.classList.add('theme-red');
//           countCurrent = 1;
//           localStorage.setItem('themeColor', 'red');
//           localStorage.setItem('indexSlide', 0);
//           break;

//         case 'blue':
//           document.body.className = '';
//           document.body.classList.add('theme-blue');
//           countCurrent = 2;
//           localStorage.setItem('themeColor', 'blue');
//           localStorage.setItem('indexSlide', 1);
//           break;

//         case 'green':
//           document.body.className = '';
//           document.body.classList.add('theme-green');
//           countCurrent = 3;
//           localStorage.setItem('themeColor', 'green');
//           localStorage.setItem('indexSlide', 2);
//           break;

//         case 'yellow':
//           document.body.className = '';
//           document.body.classList.add('theme-yellow');
//           countCurrent = 4;
//           localStorage.setItem('themeColor', 'yellow');
//           localStorage.setItem('indexSlide', 3);
//           break;

//         case 'purple':
//           document.body.className = '';
//           document.body.classList.add('theme-purple');
//           countCurrent = 5;
//           localStorage.setItem('themeColor', 'purple');
//           localStorage.setItem('indexSlide', 4);
//           break;

//         default:
//           break;
//       }

//       // mainProgress.value = countCurrent;
//       mainProgressCount.innerText = `0${countCurrent}`;
//     },

//     beforeTransitionStart: function () {
//       const $currentSlide = $('.swiper-slide-active');
//       $currentSlide.find('.main-slider__left-content').removeClass('is-active');
//       $currentSlide.find('.main-slider__modal-services').removeClass('is-active');
//     },

//     observerMutation: function () {
//       let btnOpenModal = document.querySelectorAll('.open-modal'),
//         btnCloseModal = document.querySelectorAll('.close-modal'),
//         modal = document.querySelector('.modal');

//       if (modal.length > 0 && modal.classList.contains('is-active')) {
//         autoplay.stop()
//         stopAutoPlay();
//       } else {
//         autoplay.start()
//         startAutoPlay();
//       }


//       btnOpenModal.forEach(btn => {
//         btn.addEventListener('click', function() {
//           swiperMain.autoplay.stop();
//           swiperMain.stopAutoPlay();
//           swiperMain.autoplay.delay = 999999999999;
//         })
//       })

//       btnCloseModal.forEach(btn => {
//         btn.addEventListener('click', function() {
//           swiperMain.autoplay.start();
//           swiperMain.startAutoPlay();
//           swiperMain.autoplay.delay = 12000;
//         })
//     })
//     }
//   }


// });
