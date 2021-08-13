export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstElementChild;
};

export const animateEasing = (render, duration, easing, endAnimation) => new Promise(resolve => {
    let start = Date.now();

    (function loop() {
        let p = (Date.now() - start) / duration;

        if(p > 1) {
            //конец анимации
            endAnimation();
            resolve();
        }else{
            //отрисовка анимации
            requestAnimationFrame(loop);
            render(easing(p))
        }
    }());
});