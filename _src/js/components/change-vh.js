window.addEventListener('resize', function() {
if (window.innerWidth <= 1024) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    if(window.innerWidth <= 1024 && window.innerHeight <= 1000) {
      document.querySelector('.slider__img').style.display = 'none';
      document.querySelector('.main-footer').style.position = 'absolute'
    } else {
      document.querySelector('.slider__img').style.display = 'flex';
      document.querySelector('.main-footer').style.position = 'static';
    }
  } else {
    document.querySelector('.slider__img').style.display = 'block';
    document.querySelector('.main-footer').style.position = 'absolute'
  }
})
