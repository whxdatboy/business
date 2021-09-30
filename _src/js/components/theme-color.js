class theme {
  construcor(slide, color) {
    this.color = color;
    this.slide = slide;
  }

  saySlideAndColor() {
    console.log(this.color);
    console.log(this.slide);
  }
}
