import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function() {

  console.log($('.modal-form__label').find('input[type="checkbox"]'))

  $('.modal-form__label').on('click', function() {
    if ( $(this).find('input[type="checkbox"]:checked') ) {
      $('.modal-form__submit-container button').attr('disabled', false);
    } else {
      return;
    }
  })
})
