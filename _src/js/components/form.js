import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function() {

  console.log($('.modal-form__label').find('input[type="checkbox"]'))

  $(document).on('click', '.modal-form__label', function() {
    if ($(this).find('input[type="checkbox"]:checked')) {
      $('.modal-form__submit-container button').attr('disabled', false);
    } else {
      $('.modal-form__submit-container button').attr('disabled', true);
    }
  })
})
