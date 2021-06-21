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

  if (window.screen.width <= 766) {
    if (window.getComputedStyle(cancelBtn).getPropertyValue('display') == 'none') {
      search.style.width = window.screen.width - 30 + 'px';
    }
    else {
      search.style.width = window.screen.width - 90 + 'px';
    }
  }
});

search.addEventListener('focus', () => {
  const listItems = dropdownMenu.querySelectorAll('.dropdown-menu__item');

  listItems[0].classList.add('dropdown-menu__item_animation-first-forward');
  for (let i = 1; i < listItems.length; i++) {
    listItems[i].classList.add('dropdown-menu__item_animation-forward');
  }

  if (window.getComputedStyle(cancelBtn).getPropertyValue('display') == 'none') {
    search.style.width = parseInt(window.getComputedStyle(search).getPropertyValue('width')) - 60 + 'px';
  }

  if (!menuToggle.classList.contains('display-none')) {
    dropdownMenu.classList.add('dropdown-menu__search_raise-up');
  }
  hideTopPanel();

  setTimeout(() => {
    listItems.forEach((item) => {
      cancelBtn.classList.add('display-flex');
      item.classList.remove(
        'dropdown-menu__item_animation-first-forward',
         'dropdown-menu__item_animation-forward'
      );
      item.classList.add('display-none');
    });
    dropdownMenu.classList.remove('dropdown-menu__search_raise-up');
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
  console.log(listItems[0].classList);
  dropdownMenu.classList.add('dropdown-menu__search_fall-down');
  search.style.width = parseInt(window.getComputedStyle(search).getPropertyValue('width')) + 60 + 'px';

  setTimeout(() => {
    console.log(window.getComputedStyle(cancelBtn).getPropertyValue('display'));
    listItems.forEach((item) => {
      item.classList.remove(
        'dropdown-menu__item_animation-first-back',
         'dropdown-menu__item_animation-back'
      );
    });
    dropdownMenu.classList.remove('dropdown-menu__search_fall-down');
    showTopPanel();
    console.log(window.getComputedStyle(cancelBtn).getPropertyValue('display'));
    console.log(cancelBtn.classList);
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

function hideTopPanel() {
  menuToggle.classList.add('display-none');
  header.querySelector('.logo').classList.add('display-none');
}

function showTopPanel() {
  menuToggle.classList.remove('display-none');
  header.querySelector('.logo').classList.remove('display-none');
}
