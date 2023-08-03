let navBar = document.getElementById("nav-bar");
let navBarHamburgerIcon = document.getElementById("hamburger-icon");
let navBarCloseBtn = document.getElementById("nav-bar-mobile-close-btn");
let navBarMenuOptions = document.getElementsByClassName("nav-bar-link");

navBarHamburgerIcon.addEventListener("click", () => {
  navBar.classList.add("nav-bar-active");
});

navBarCloseBtn.addEventListener("click", () => {
  navBar.classList.remove("nav-bar-active");
});

Array.from(navBarMenuOptions).forEach((optionEl) => {
  optionEl.addEventListener("click", () => {
    navBar.classList.remove("nav-bar-active");
  });
});
