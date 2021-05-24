const stars = document.querySelectorAll('.star');

console.log(stars);


for (const star of stars) {
  star.addEventListener('mouseover', () => {
    if (star.src.match(/selectedStar/g)) {
      return;
    }
    star.src = './img/table/tbody/hoverStar.svg';
  });
  star.addEventListener('mouseout', () => {
    if (star.src.match(/selectedStar/g)) {
      return;
    }
    star.src = './img/table/tbody/star.svg';
  });
  star.addEventListener('mousedown', () => {
    (star.src.match(/selectedStar/g)) ?
      star.src = './img/table/tbody/star.svg' :
      star.src = './img/table/tbody/selectedStar.svg';
  });
}

const mainCheckbox = document.querySelector('.mainCheckbox');
const checkBoxes = document.querySelectorAll('.checkbox');

mainCheckbox.addEventListener('mousedown', () => {
  if (mainCheckbox.style.background.match(/CheckMark/g)) {
    mainCheckbox.style.background = 'rgba(34, 62, 105, 0.2)';
    setCheckboxesState(false);
  } else {
    mainCheckbox.style.background =
        'url("./img/table/tbody/blueCheckMark.svg"), rgba(34, 62, 105, 0.2)';
    setCheckboxesState(true);
  }
});
/**
 * @param {boolean} state true - all select, false - all not select
 */
function setCheckboxesState(state) {
  if (state) {
    setCheckboxesBackground(
        'url("./img/table/tbody/blueCheckMark.svg"), rgba(34, 62, 105, 0.2)');
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
    if (checkbox.style.background.match(/CheckMark/g)) {
      checkbox.style.background = 'rgba(34, 62, 105, 0.2)';
    } else {
      checkbox.style.background =
        'url("./img/table/tbody/blueCheckMark.svg"), rgba(34, 62, 105, 0.2)';
    }
  });
}
