export default class Slider {
  constructor(items, leftArrow, rightArrow) {
    this.items = items;
    this.currentSliderIndex = 0;
    this._setOpacity0(this.items);

    leftArrow.addEventListener('click', ()=> { this._showPrevious() })
    rightArrow.addEventListener('click', ()=> { this._showNext() })
  }
  _showPrevious() {
    this.items[this.currentSliderIndex].style.opacity = 0;
    (this.currentSliderIndex != 0) ? this.currentSliderIndex-- :
      this.currentSliderIndex = this.items.length - 1;

    this.items[this.currentSliderIndex ].style.opacity = 1;
  }
  _showNext() {
    this.items[this.currentSliderIndex].style.opacity = 0;
    (this.currentSliderIndex != this.items.length - 1) ? this.currentSliderIndex++ :
      this.currentSliderIndex = 0;

    this.items[this.currentSliderIndex ].style.opacity = 1;
  }
  _setOpacity0(items) {
    for(let i of items) {
      i.style.opacity = 0;
    }
    items[0].style.opacity = 1;
  }
}
