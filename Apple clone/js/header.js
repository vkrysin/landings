const header = document.querySelector('header');

const menuToggle = header.querySelector('.menu-icon');
const dropdownMenu = header.querySelector('.dropdown-menu');
const shoppingBag = header.querySelector('.shopping-bag');
const search = header.querySelector('.dropdown-menu__search input');
const cancelBtn = header.querySelector('.cancel-btn');

const topLine = menuToggle.children[0];
const bottomLine = menuToggle.children[1];

window.addEventListener('resize', () => {
  if(window.screen.width > 766) {
    topLine.classList.remove('menu-icon__top_rotate45deg');
    bottomLine.classList.remove('menu-icon__bottom_rotate-45deg');

    shoppingBag.classList.remove('shopping-bag_opacity-0');
    hideModalDropDownMenu();
  }
});

search.addEventListener('focus', () => {
  const listItems = dropdownMenu.querySelectorAll('.dropdown-menu__item');

  listItems[0].classList.add('dropdown-menu__item_animation-first-forward');
  for (let i = 1; i < listItems.length; i++) {
    listItems[i].classList.add('dropdown-menu__item_animation-forward');
  }

  cancelBtn.classList.add('display-flex');

  setTimeout(() => {
    listItems.forEach((item) => {
      item.classList.remove(
        'dropdown-menu__item_animation-first-forward',
         'dropdown-menu__item_animation-forward'
      );
      item.classList.add('display-none');
    });
  }, 300);
});

cancelBtn.addEventListener('click', function() {
  this.classList.remove('display-flex');

  const listItems = dropdownMenu.querySelectorAll('.dropdown-menu__item');

  listItems[0].classList.add('dropdown-menu__item_animation-first-back');
  listItems[0].classList.remove('display-none');

  for (let i = 1; i < listItems.length; i++) {
    listItems[i].classList.remove('display-none');
    listItems[i].classList.add('dropdown-menu__item_animation-back');
  }

  cancelBtn.classList.remove('display-flex');

  setTimeout(() => {
    listItems.forEach((item) => {
      item.classList.remove(
        'dropdown-menu__item_animation-first-back',
         'dropdown-menu__item_animation-back'
      );
    });
  }, 300);
});

menuToggle.addEventListener('click', () => {

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
  dropdownMenu.classList.add('display-block');

  header.classList.add('modal-header');

  header.addEventListener('scroll', (event) => {
    event.stopPropagation();
  })
  header.addEventListener('click', (event) => {
    event.stopPropagation();
  })
}

function hideModalDropDownMenu() {
  dropdownMenu.classList.remove('display-block');

  header.classList.remove('modal-header');

  header.removeEventListener('scroll', (event) => {
    event.stopPropagation();
  });

  header.removeEventListener('click', (event) => {
    event.stopPropagation();
  })
}
