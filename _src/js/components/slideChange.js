export function themeChange() {
  const currentSlide = document.querySelector('.swiper-slide-active'),
        currentSlideData = currentSlide.dataset.color,
        currentSlideIndex = currentSlide.dataset.swiperSlideIndex,
        classText = 'theme-',
        svgNavLinks = document.querySelectorAll('.svg-nav__element'),
        navLinks = document.querySelectorAll('.nav-item'),
        leftContent = currentSlide.querySelector('.main-slider__left-content'),
        leftContentModal = currentSlide.querySelector('.main-slider__modal-services');

  document.body.className = '';
  document.body.className = classText + currentSlideData;

  svgNavLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.getAttribute('id') === currentSlideData) {
      link.classList.add('active-link')
    }
  })

  localStorage.setItem('indexSlide', currentSlideIndex)

  localStorage.setItem('themeColor', currentSlideData)

  navLinks.forEach(link => {
    link.classList.remove('active-link');

    if (link.dataset.nav === currentSlideData) {
      link.classList.add('active-link')
    }
  })

  if (leftContent.classList.contains('is-active') && leftContentModal.classList.contains('is-active')) {
    leftContent.classList.remove('is-active');
    leftContentModal.classList.remove('is-active');
  }
}
