export function getThemeColor() {
  let theme = localStorage.getItem('themeColor'),
      textClass = 'theme-',
      indexSlide = localStorage.getItem('indexSlide');

  document.body.classList = '';
  document.body.classList.add(textClass + theme);

  console.log("theme is " + theme);

  console.log("slide`s index is " + indexSlide)
}
