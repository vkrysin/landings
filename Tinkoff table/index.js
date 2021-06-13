import './styles.scss';
import hoverStarImg from './img/table/tbody/hoverStar.svg';
import selectedStarImg from './img/table/tbody/selectedStar.svg';
import starImg from './img/table/tbody/star.svg';
import blueCheckMarkImg from './img/table/tbody/blueCheckMark.svg';

const stars = document.querySelectorAll('.star');

for (const star of stars) {
  star.addEventListener('mouseover', () => {
    if (star.src === selectedStarImg) {
      return;
    }
    star.src = hoverStarImg;
  });
  star.addEventListener('mouseout', () => {
    if (star.src === selectedStarImg) {
      return;
    }
    star.src = starImg;
  });
  star.addEventListener('mousedown', () => {
    (star.src === selectedStarImg) ?
      star.src = starImg :
      star.src = selectedStarImg;
  });
}

const mainCheckbox = document.querySelector('.mainCheckbox');
const checkBoxes = document.querySelectorAll('.checkbox');

mainCheckbox.addEventListener('mousedown', () => {
  if (mainCheckbox.style.background ==
        `url("${blueCheckMarkImg}"), rgba(34, 62, 105, 0.2)`) {
    mainCheckbox.style.background = 'rgba(34, 62, 105, 0.2)';
    setCheckboxesState(false);
  } else {
    mainCheckbox.style.background =
      `url("${blueCheckMarkImg}"), rgba(34, 62, 105, 0.2)`;
    setCheckboxesState(true);
  }
});
/**
 * @param {boolean} state true - all select, false - all not select
 */
function setCheckboxesState(state) {
  if (state) {
    setCheckboxesBackground(
        `url("${blueCheckMarkImg}"), rgba(34, 62, 105, 0.2)`);
  } else {
    setCheckboxesBackground('rgba(34, 62, 105, 0.2)');
  }
}
/**
 *
 * @param {string} background
 */
function setCheckboxesBackground(background) {
  for (const checkbox of checkBoxes) {
    checkbox.style.background = background;
  }
}

for (const checkbox of checkBoxes) {
  checkbox.addEventListener('mousedown', () => {
    if (checkbox.style.background ==
          `url("${blueCheckMarkImg}"), rgba(34, 62, 105, 0.2)`) {
      checkbox.style.background = 'rgba(34, 62, 105, 0.2)';
    } else {
      checkbox.style.background =
        `url("${blueCheckMarkImg}"), rgba(34, 62, 105, 0.2)`;
    }
  });
}
