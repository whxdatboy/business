let lastInterval = -1;

const recallBtn = document.querySelector('.main__recall'),
      recallBtnText = recallBtn.querySelector('.main__recall-icon');

function delayAnimation(el) {
  console.log("animka doing")
  clearInterval(lastInterval);
  let style = getComputedStyle(el),
      step = 0.01;
  let delay = parseFloat(style.animationDelay);

  lastInterval = setInterval(function() {
    delay += step;
    el.style.animationDelay = delay + "s";
  }, 12);
}

recallBtn.addEventListener('mouseover', function(){
  delayAnimation(recallBtnText);
});
recallBtn.addEventListener('mouseout', function(){
  clearInterval(lastInterval);
});
