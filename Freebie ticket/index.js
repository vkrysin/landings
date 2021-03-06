import Slider from './logic/slider.js'

let collectionsSliderItems = document.querySelectorAll('.collections .slider__item');
let collectionsLeftArrow = document.querySelector('.collections .left-arrow');
let collectionsRightArrow = document.querySelector('.collections .right-arrow');

new Slider(collectionsSliderItems, collectionsLeftArrow, collectionsRightArrow);

let personalSliderItems = document.querySelectorAll('.personal-recommendations .slider__item');
let personalLeftArrow = document.querySelector('.personal-recommendations .left-arrow');
let personalRightArrow = document.querySelector('.personal-recommendations .right-arrow');

new Slider(personalSliderItems, personalLeftArrow, personalRightArrow);

let btn = document.querySelector('.drop-btn');

btn.addEventListener('click', () => {
  console.log(1000000000000000);
  document.querySelector('.dropdown-content').style.display = 'block';
})
