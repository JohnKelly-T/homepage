import './styles/reset.css';
import './styles/global.css';

// variables for hiding and showing nav based on scroll
let lastScrollPos = 0;
let nav = document.querySelector("nav");
let header = document.querySelector("header");

// variables for changing active nav link when section passes center of the screen
let navList = document.querySelectorAll("nav li");
let pageSections = document.querySelectorAll("section:not(#hero)");

document.addEventListener('scroll', () => {
  // if scrolling down hide nav else show nav
  if (window.scrollY > lastScrollPos) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  // update last scroll pos
  lastScrollPos = window.scrollY;

  let scrollY = window.scrollY;
  let viewportHeight = window.innerHeight;
  let centerY = scrollY + (viewportHeight / 2);

  // remove active classes from all sections
  navList.forEach(link => {
    link.classList.remove('active');
  });

  // add active class to section on screen
  pageSections.forEach(section => {
    let secTop = section.offsetTop;
    let secHeight = section.offsetHeight;
    let secId = section.dataset.id;

    if (centerY > secTop && centerY < secTop + secHeight) {
      navList[secId].classList.add('active');
    }
  });
});

header.addEventListener("mouseenter", () => {
  nav.classList.remove("hide");
});