let hiddenElments = document.querySelectorAll(".hidden");

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElments.forEach((el) => observer.observe(el));
