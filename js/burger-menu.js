const btnBurger = document.getElementById("btn--burger");
const headerNav = document.getElementById("header-nav");
const handleClick = () => {
  headerNav.classList.toggle("active");
};
btnBurger.addEventListener("click", handleClick);
