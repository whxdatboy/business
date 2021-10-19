import './vendor/modal';
import './components/localStorage'
import './vendor/swiper';
import {openModalSliders} from './vendor/slider-modal';
import {closeSliderModal} from './vendor/slider-close'
import './components/form';
import './components/search';
import './components/svg-animation';
import './components/animation-delay';

document.addEventListener("DOMContentLoaded", function () {
  let progress = document.querySelector('.progress-line');
  progress.classList.add('animaton')

  let modalsItem = $('.modal-menu__item');

  modalsItem.each(function () {
    $(this).on('click', function(e) {
      e.preventDefault();

      let $desc = $(this).find('.modal-menu__desc');
      $desc.toggleClass('desc-active');
    });
  });

  const btnCloseModal = $('.modal-close');

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
