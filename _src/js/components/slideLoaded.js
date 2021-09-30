export function setActiveBullet() {
  const currentSlide = document.querySelector('.swiper-slide-active'),
            slideAttr = currentSlide.dataset.color,
            slideIndex = localStorage.getItem('indexSlide'),
            slideTheme = localStorage.getItem('themeColor'),
            classTheme = 'theme-';

    document.body.classList.add(classTheme + slideTheme);
}
