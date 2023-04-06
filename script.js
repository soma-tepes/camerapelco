const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburgerBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
