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


// #########################################################
//    Code for animating elements when visible on viewport
// #########################################################
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    } 
  });
}, {threshold: 0.5});

//    Hero elements
let heroImg = document.querySelector("#hero-img");
let heroResumeLink = document.querySelector(".resume-link");
let heroEmailLink = document.querySelector(".mailto-link");
let heroSocialMediaLinks = document.querySelector(".social-media-links");
let introContainerElements = document.querySelectorAll(".intro-container > *");
let scrollDownIcon = document.querySelector(".scroll-down-icon");
let logo = document.querySelector(".logo");

observer.observe(header);
observer.observe(heroImg);
observer.observe(heroResumeLink);
observer.observe(heroEmailLink);
observer.observe(heroSocialMediaLinks);
observer.observe(scrollDownIcon);
observer.observe(logo);
introContainerElements.forEach(el => observer.observe(el));


//    About elements
let aboutHeading = document.querySelector(".about-text .section-heading");
let aboutDescriptions = document.querySelectorAll(".about-text .section-description");
let aboutImg = document.querySelector("#about-img")

observer.observe(aboutHeading);
observer.observe(aboutImg);
aboutDescriptions.forEach(el => observer.observe(el));

//    Project Elements
let projectHeading = document.querySelector("#projects .section-heading");
let projectDescription = document.querySelector("#projects .section-description");
let projectCards = document.querySelectorAll(".card");

observer.observe(projectHeading);
observer.observe(projectDescription);
projectCards.forEach(el => observer.observe(el));

//    Skills Elemnents
let skillsHeading = document.querySelector("#skills .section-heading");
let skillsDescriptions = document.querySelectorAll("#skills .section-description");
let skillsList = document.querySelectorAll("#skills .skills-list");

observer.observe(skillsHeading);
skillsDescriptions.forEach(el => observer.observe(el));
skillsList.forEach(el => observer.observe(el));

//    Contact Elements
let contactHeading = document.querySelector("#contact .section-heading");
let contactDescription = document.querySelector("#contact .section-description");
let contactDetails = document.querySelector("#contact .details");
let contactCta = document.querySelector("#contact .send-a-message");
let socialsAndCredits = document.querySelector(".socials-and-credits");

observer.observe(contactHeading);
observer.observe(contactDescription);
observer.observe(contactDetails);
observer.observe(contactCta);
observer.observe(socialsAndCredits);