const btnBurger = document.getElementById("btn--burger");
const headerNav = document.getElementById("header-nav");

const toggleMenu = () => {
  headerNav.classList.toggle("active");
};
btnBurger.addEventListener("click", toggleMenu);

//close navigation on click
const navLinks = document.querySelectorAll(".header-nav__link");

const closeMenu = () => {
  headerNav.classList.remove("active");
};

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
