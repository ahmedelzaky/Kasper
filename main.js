let hiddenElments = document.querySelectorAll(".hidden");

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // } else {
      //   entry.target.classList.remove("show");
      // }
    }
  });
});

hiddenElments.forEach((el) => observer.observe(el));

let mButton = document.querySelector(".toggle-menu");
let menu = document.querySelector(".m_menu");
let displayMenu = false;

mButton.addEventListener("click", function () {
  if (!displayMenu) {
    menu.style.display = "flex";
    displayMenu = true;
  } else {
    menu.style.display = "none";
    displayMenu = false;
  }
});
