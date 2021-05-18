let sliderImgs = [];
let currentSliderIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  sliderImgs = document.querySelectorAll('.slider__item');
  for(let sliderItem of sliderImgs) {
    sliderItem.style.opacity = 0;
  }
  sliderImgs[0].style.opacity = 1;
})

function showPrevious() {
  sliderImgs[currentSliderIndex].style.opacity = 0;
  if(currentSliderIndex != 0) {
    currentSliderIndex--;
    sliderImgs[currentSliderIndex ].style.opacity = 1;
  }
  else {
    currentSliderIndex = sliderImgs.length - 1;
    sliderImgs[currentSliderIndex].style.opacity = 1;
  }
}
function showNext() {
  sliderImgs[currentSliderIndex].style.opacity = 0;
  if(currentSliderIndex != sliderImgs.length - 1) {
    currentSliderIndex++;
    sliderImgs[currentSliderIndex].style.opacity = 1;
  }
  else {
    currentSliderIndex = 0;
    sliderImgs[currentSliderIndex].style.opacity = 1;
  }
}
