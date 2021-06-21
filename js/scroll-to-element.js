const smoothScrollEl = document.querySelectorAll(".smooth-scroll");

const scrollToDestination = (e) => {
  e.preventDefault();
  const destination =
    document.querySelector(e.target.getAttribute("href")) ||
    document.getElementById("about");
  destination.scrollIntoView({ behavior: "smooth" });
};

smoothScrollEl.forEach((el) =>
  el.addEventListener("click", scrollToDestination)
);
