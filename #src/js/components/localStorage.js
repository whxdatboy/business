let indexTheme, indexSlide;

function getThemeColor() {
  let theme = localStorage.getItem('themeColor');
  let textClass = 'theme-'

  switch(theme) {
    case `red`:
      indexTheme = 'red';
      indexSlide = 0;
      console.log('red')
      break;
    case `blue`:
      indexTheme = 'blue';
      indexSlide = 1;
      console.log('blue')
      break;
    case `green`:
      indexTheme = 'green';
      indexSlide = 2;
      console.log('green')
      break;
    case `yellow`:
      indexTheme = 'yellow';
      indexSlide = 3;
      console.log('yellow')
      break;
    case `purple`:
      indexTheme = 'purple';
      indexSlide = 4;
      console.log('purple');
      break;
    default:
      console.log('Theme color is undefined')
      break;
  }

  document.body.classList = '';
  document.body.classList.add(textClass + indexTheme);

  console.log(theme)

  console.log(indexTheme)

  console.log(indexSlide)
}

getThemeColor();
