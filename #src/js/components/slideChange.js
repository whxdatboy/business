export function themeChange() {
  const currentSlide = document.querySelector('.swiper-slide-active'),
        currentSlideData = currentSlide.dataset.color,
        classText = 'theme-',
        svgNavLinks = document.querySelectorAll('.svg-nav__element'),
        navLinks = document.querySelectorAll('.nav-item');

  document.body.className = '';
  document.body.className = classText + currentSlideData;

  svgNavLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.getAttribute('id') === currentSlideData) {
      link.classList.add('active-link')
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.dataset.nav === currentSlideData) {
      link.classList.add('active-link')
    }
  })
}
