import $ from 'jquery';

export function openModalSliders() {
  const btnModalSlider = $('.open-modal-slider'),
  activeClass = 'is-active',
  btnBack = $('.nav-back');

  btnModalSlider.each(function() {
    const $this = $(this);

    $this.on("click", function(e) {
      e.preventDefault();
      const $modalSlide = $this.closest('.main-slider__left').find('.main-slider__modal-services'),
      $leftContent = $this.closest('.main-slider__left').find('.main-slider__left-content');

      $modalSlide.addClass(activeClass);
      $leftContent.addClass(activeClass);
      btnBack.addClass(activeClass);

      if ($(window).width() < 768) {
        btnBack.closest('nav').css('height', '45px')
        $('.main-footer').css('display', 'none');
      }
    })
  })
}
