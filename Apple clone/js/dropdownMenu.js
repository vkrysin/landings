let menuToggle = document.querySelector('.menu-icon');
let dropdownMenu = document.querySelector('.dropdown-menu');
let shoppingBag = document.querySelector('.shopping-bag');
let header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
  let topLine = menuToggle.children[0];
  let bottomLine = menuToggle.children[1];

  if (topLine.classList.contains('menu-icon__top_rotate45deg')) {
    topLine.classList.remove('menu-icon__top_rotate45deg');
    bottomLine.classList.remove('menu-icon__bottom_rotate-45deg');

    shoppingBag.classList.remove('shopping-bag_opacity-0');

    hideModalDropDownMenu();
  }
  else {
    topLine.classList.add('menu-icon__top_rotate45deg');
    bottomLine.classList.add('menu-icon__bottom_rotate-45deg');

    shoppingBag.classList.add('shopping-bag_opacity-0');

    showModalDropdownMenu();
  }
})

function showModalDropdownMenu() {
  dropdownMenu.classList.remove('display-none');
  header.classList.add('modal-header');

  header.addEventListener('scroll', (event) => {
    event.stopPropagation();
  })
  header.addEventListener('click', (event) => {
    event.stopPropagation();
  })
}

function hideModalDropDownMenu() {
  dropdownMenu.classList.add('display-none');
  header.classList.remove('modal-header');

  header.removeEventListener('scroll', (event) => {
    event.stopPropagation();
  });

  header.removeEventListener('click', (event) => {
    event.stopPropagation();
  })
}
