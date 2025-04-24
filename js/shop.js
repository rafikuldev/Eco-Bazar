OmRangeSlider.init({
  min: 50,
  max: 1500,
  unit: ' Pcs.',
});




const navbar = document.querySelector('footer.nav__menu');
const navlinks = Array.from(navbar.querySelectorAll('.nav__link'));
const canvas = document.querySelector('html,body');

const activeNavLink = e => {
  //* REMOVE ALL ACTIVE CLASS
  navlinks.map(link => link.classList.remove('active-link'));
  //*ADD CLASS
  e.target.classList.add('active-link');
};

navlinks.map(navLink => {
  navLink.addEventListener('click', activeNavLink);
});
