export function getThemeColor() {
  let theme = localStorage.getItem('themeColor'),
      textClass = 'theme-';

  document.body.classList = '';
  document.body.classList.add(textClass + theme);
}
