export function closeSliderModal() {
  const modalSliderLeft = document.querySelector('.main-slider__modal-services.is-active'),
        sliderLeftContent = document.querySelector('.main-slider__left-content.is-active'),
        activeClass = 'is-active',
        btnBack = document.querySelector('.nav-back');

  modalSliderLeft.classList.remove(activeClass);
  sliderLeftContent.classList.remove(activeClass);
  btnBack.classList.remove(activeClass);
}
