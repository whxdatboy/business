import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
  let footerLink = $('.footer-item');

  footerLink.each(function() {
    $(this).on('mouseover', function() {
      let cont = $(this).find('.footer-sublinks__wrapper.is-hidden');
      cont.removeClass('is-hidden');
    });

    $(this).on('mouseout', function() {
      let cont = $(this).find('.footer-sublinks__wrapper.is-hidden');
      cont.addClass('is-hidden');
    });
  })


})
