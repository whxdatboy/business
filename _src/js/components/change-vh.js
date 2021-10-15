window.addEventListener('resize', function() {
if (window.innerWidth <= 1024) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  if(window.innerWidth <= 1024 && window.innerHeight <= 1236) {
    document.querySelector('.main-slider__img-wrapper').style.display = 'none';
  }
})
