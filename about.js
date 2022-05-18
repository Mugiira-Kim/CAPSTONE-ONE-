const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('.toggle-menu');
const mobileMenu = document.getElementById('show-menu');
const hideMenu = document.getElementById('close-icon');

function showMobile() {
  mobileMenu.style.display = 'block';
  hamburger.style.display = 'none';
}
hamburger.addEventListener('click', showMobile);

function hideMobile() {
  mobileMenu.style.display = 'none';
}
hideMenu.addEventListener('click', hideMobile);

function showHamburger() {
  hamburger.style.display = 'block';
}
hideMenu.addEventListener('click', showHamburger);

menuItems.forEach((menuItem) => { menuItem.addEventListener('click', hideMobile, showHamburger); });