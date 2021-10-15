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
import './components/svg-animation';
import './components/animation-delay';

document.addEventListener("DOMContentLoaded", function () {

  const body = document;

  let progress = document.querySelector('.progress-line');
  progress.classList.add('animaton')

  let modalsItem = $('.modal-menu__item');

  modalsItem.each(function () {
    $(this).on('click', function() {
      console.log(`нажал на ${$(this)}`)
      $(this).find('.modal-menu__desc').addClass('desc-active');
    });

    $(this).on('mouseleave', function() {
      $('.modal-menu__desc').removeClass('desc-active');
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

    if ($(window).width() < 768) {
      $('nav').css('height', '0')
      $('.main-footer').css('display', 'flex');
    }
  });
})
