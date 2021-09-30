export function countMax() {
  let slides = document.querySelectorAll('.main-slider__left:not(.swiper-slide-duplicate)');

  document.querySelector('.pagination-max').innerText = `0${slides.length}`;
}

export function countChange() {
  let activeSlide = document.querySelector('.swiper-slide-active').getAttribute('data-swiper-slide-index'),
      index = +activeSlide + 1;

  document.querySelector('.pagination-count').innerText = `0${index}`;
}
