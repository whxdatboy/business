export function setActiveBullet() {
  const slideTheme = localStorage.getItem('themeColor'),
        classTheme = 'theme-';

    document.body.classList.add(classTheme + slideTheme);
}
