const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");

//hamburger event listener
btnToggleNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    header.classList.remove("nav-open");
  });
});
