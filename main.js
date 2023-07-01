//photo slider
let photoDir = [
  "images/slide-01.jpg",
  "images/slide-02.jpg",
  "images/slide-03.jpg",
];

let bullets = document.querySelectorAll(".bullets li");

let landing = document.querySelector(".landing");

let index = Math.floor(Math.random() * photoDir.length);
console.log(index);

function changePhoto() {
  if (index > photoDir.length - 1) {
    index = 0;
  }

  // Change the background image
  landing.style.backgroundImage = `url(${photoDir[index]})`;

  // Update active bullet
  bullets[index].classList.add("active");
  bullets.forEach((bullet) => {
    if (bullet != bullets[index]) {
      bullet.classList.remove("active");
    }
  });

  index++;
}

changePhoto();

setInterval(changePhoto, 5000);

//change photo on bullet click
bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", function () {
    index = i;
    changePhoto();
  });
});

//hide and show elements on scroll
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
