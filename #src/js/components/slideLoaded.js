export function setActiveBullet() {
  const currentSlide = document.querySelector('.swiper-slide-active'),
            slideAttr = currentSlide.dataset.color,
            slideIndex = localStorage.getItem('indexSlide'),
            slideTheme = localStorage.getItem('themeColor'),
            classTheme = 'theme-';

    const navSvgLink = document.getElementById(`${slideAttr}`);

    document.body.classList.add(classTheme + slideAttr);

    navSvgLink.classList.add('active-link')

    return;
}
