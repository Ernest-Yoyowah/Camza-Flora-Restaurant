const navbar = document.querySelector('nav');
const menuItems = navbar.querySelectorAll('ul li a');
const searchInput = navbar.querySelector('.search input');
const searchBtn = navbar.querySelector('.search button');
const heartIcon = navbar.querySelector('#heart-icon');
const cartIcon = navbar.querySelector('#cart-icon');

// add active class to menu item when clicked
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

// perform search when search button is clicked
searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  // perform search logic here
});

// add click listener to heart icon
heartIcon.addEventListener('click', () => {
  // perform heart icon functionality here
});

// add click listener to cart icon
cartIcon.addEventListener('click', () => {
  // perform cart icon functionality here
});




const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

