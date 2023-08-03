let nightModeToggleButton = document.getElementById("theme-switch");
let roo = document.querySelector(":root");

nightModeToggleButton.addEventListener("click", () => {
  if (nightModeToggleButton.checked) {
    console.log("turning on night mode");
    roo.style.setProperty("--white-main", "#1a1919");
    roo.style.setProperty("--black-main", "#f5f5f7");
  } else {
    console.log("turning on day mode");
    roo.style.setProperty("--black-main", "#1d1d1d");
    roo.style.setProperty("--white-main", "#f5f5f7");
  }
});
