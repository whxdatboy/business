import './components/localStorage'
import './vendor/swiper-second-try';
import {modalsInit} from './vendor/modal';
import {openModalSliders} from './vendor/slider-modal';
// import './vendor/swiper';
import './components/form';
import './components/form-mask';
import './components/search';
import './components/footer-nav';
import './components/autoplay';
import './components/svg-animation';
import {delayAnimation} from './components/animation-delay';

document.addEventListener("DOMContentLoaded", function () {

  const body = document;

  let modalsItem = $('.modal-menu__item');

  modalsItem.each(function () {
    $(this).click(function() {
      $(this).find('.modal-menu__desc').slideDown(300);
    });

    $(this).mouseleave(function() {
      $('.modal-menu__desc').slideUp(300);
    });
  });

  const btnHeader = $('.header__menu'),
  btnCloseModal = $('.modal-close'),
  btnRecall = $('.main__recall');


  // btnHeader.click(function(e) {
  //   e.preventDefault();
  //   $('.modal').addClass('is-active'),
  //   $('.modal--menu').addClass('is-active');
  // })

  btnCloseModal.each(function() {
    $(this).click(function(e) {
      e.preventDefault();
      $('.modal').removeClass('is-active'),
      $(this).closest('.modal-container').removeClass('is-active');
    })
  })

  openModalSliders();

  if ($('.modal').hasClass('is-active')) {
    document.addEventListener('keypress:27', function() {
      console.log('нажал esc')
      $(this).removeClass('is-active')
    })
  }

  const lastInterval = -1;

  const recallBtn = document.querySelector('.main__recall'),
        recallBtnText = recallBtn.querySelector('.main__recall-icon');

  // recallBtn.addEventListener('onmouseover', delayAnimation);
  recallBtn.addEventListener('onmouseout', clearInterval(lastInterval));

  recallBtnText.ommouseover = delayAnimation;

});
