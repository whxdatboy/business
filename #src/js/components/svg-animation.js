const linksWrap = document.querySelector('.svg-nav'),
      links = document.querySelectorAll('.svg-nav__element');

linksWrap.addEventListener('click', function(e){
  links.forEach(link => {
    link.classList.remove('active-link');
  })
  e.target.closest('.svg-nav__element').classList.add('active-link');
})
