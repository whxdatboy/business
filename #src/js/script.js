import {modalsInit} from './vendor/modal';
import {openModalSliders} from './vendor/slider-modal';
import {swiperMain} from './vendor/swiper';

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

});
