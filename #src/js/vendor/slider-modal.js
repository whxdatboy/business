import $ from 'jquery';

export function openModalSliders() {
  const btnModalSlider = $('.open-modal-slider'),
  modalSlider = $('.main-slider__modal-services'),
  activeClass = 'is-active';

  btnModalSlider.each(function() {
    const $this = $(this);

    $this.on("click", function(e) {
      e.preventDefault();
      const $modalSlide = $this.closest('.main-slider__item').find('.main-slider__modal-services'),
      $leftContent = $this.closest('.main-slider__left').find('.main-slider__left-content');

      $modalSlide.addClass(activeClass);
      $leftContent.addClass(activeClass);
    })
  })
}


