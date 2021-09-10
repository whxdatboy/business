function delayAnimation(el) {
  console.log("animka doing")
  clearInterval(lastInterval);
  const style = getComputedStyle(el),
        step = 1.01;
  let delay = parseFloat(style.animationDelay);

  lastInterval = setInterval(function() {
    delay += step;
    el.style.animationDelay = delay + "s";
  }, 12);
}
