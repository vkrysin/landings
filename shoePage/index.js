// dropdown menu
<<<<<<< HEAD
=======
import './styles.scss';
>>>>>>> master

const dropdownMenu = document.querySelector('.item__menu');

dropdownMenu.addEventListener('click', () => {
  const itemsContainer = document.querySelector('.left > nav');
  itemsContainer.classList.add('dropdown');
});
