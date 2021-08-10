document.addEventListener("DOMContentLoaded", function () {

  const swiperMain = new Swiper('.main-slider', {
    diriction: 'vertical',
    loop: true,

    pagination: {
      el: '.main-slider__pagination',
    },

    slideClass: '.main-slider__item',

    on: {
      init: function () {
        console.log('init')
      }
    }


  })

});
