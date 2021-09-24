export function countMax() {
  let slidesCount = 0,
      slides = document.querySelectorAll('.main-slider__left:not(.swiper-slide-duplicate)');

  for (let i = 0; i - 1 < slides.length; i++) {
    slidesCount = i;
  }

  document.querySelector('.pagination-max').innerText = `0${slidesCount}`;
}

export function countChange() {
  let activeSlide = document.querySelector('.swiper-slide-active').getAttribute('data-swiper-slide-index'),
      index = +activeSlide + 1;

  document.querySelector('.pagination-count').innerText = `0${index}`;
}
