const animatedOnScroll = document.querySelectorAll(".animatedOnScroll");
//check if intersection observer is suppported
if (IntersectionObserver) {
  const animate = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inView");
        if (entry.target.dataset.delay) {
          entry.target.style.animationDelay = entry.target.dataset.delay;
        }
      }
    });
  };

  const observer = new IntersectionObserver(animate, {
    root: null,
    threshold: 0.3,
  });

  animatedOnScroll.forEach((item) => observer.observe(item));
} else {
  animatedOnScroll.forEach((item) => (item.style.animation = "none"));
}
