// Get all the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event


const toggleSwitch = document.getElementById('theme-toggle');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-theme');
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.body.classList.remove('dark-theme');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
