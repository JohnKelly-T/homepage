import './styles/reset.css';
import './styles/global.css';

// code for hiding and showing nav based on scroll
let lastScrollPos = 0;
let nav = document.querySelector("nav");

document.addEventListener('scroll', () => {
  // if scrolling down hide nav else show nav
  if (window.scrollY > lastScrollPos) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  // update last scroll pos
  lastScrollPos = window.scrollY;
});