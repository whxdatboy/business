import './components/localStorage'
import './vendor/swiper-second-try';
import {modalsInit} from './vendor/modal';
import {openModalSliders} from './vendor/slider-modal';
import {closeSliderModal} from './vendor/slider-close'
// import './vendor/swiper';
import './components/form';
import './components/form-mask';
import './components/search';
import './components/footer-nav';
import './components/autoplay';
import './components/svg-animation';
import './components/animation-delay';

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

  document.addEventListener('keydown', function(e) {
    if ($('.modal').hasClass('is-active')) {
      if (e.code === 'Escape') {
        $('.modal').removeClass('is-active');
        $('.modal').find('[data-modal').removeClass('is-active');
      }
    }
  })
  openModalSliders();

  const btnBack = document.querySelector('.nav-back')

  btnBack.addEventListener('click', function(e) {
    e.preventDefault();
    closeSliderModal();
  });
})
