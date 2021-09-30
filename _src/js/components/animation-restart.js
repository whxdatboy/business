export function restartAnimation() {
  let element = document.querySelector('.progress-line')

  element.classList.remove('animation');
  void element.offsetWidth;
  element.classList.add('animation')
}
