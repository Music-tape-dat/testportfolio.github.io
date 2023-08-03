const projectShowcaseContainer = document.getElementById(
  "project-showcase-container"
);
const codeImg = document.getElementById("code-img");
const img1 = document.getElementById("showcase-project-img-1");
const img2 = document.getElementById("showcase-project-img-2");
const img3 = document.getElementById("showcase-project-img-3");
const img4 = document.getElementById("showcase-project-img-4");
const img5 = document.getElementById("showcase-project-img-5");
const img6 = document.getElementById("showcase-project-img-6");

let codeImgMiddleX =
  parseInt(codeImg.getBoundingClientRect().left) + codeImg.offsetWidth / 2;
let codeImgMiddleY =
  parseInt(codeImg.getBoundingClientRect().top) + codeImg.offsetHeight / 2;

projectShowcaseContainer.addEventListener("mouseover", () => {
  codeImg.style.scale = 0.1;
  img1.style.scale = 1;
  img1.style.opacity = 1;

  img2.style.scale = 1;
  img2.style.opacity = 1;

  img3.style.scale = 1;
  img3.style.opacity = 1;

  img4.style.scale = 1;
  img4.style.opacity = 1;

  img5.style.scale = 1;
  img5.style.opacity = 1;

  img6.style.scale = 1;
  img6.style.opacity = 1;
});

projectShowcaseContainer.addEventListener("mouseout", () => {
  codeImg.style.scale = 1;
  img1.style.scale = 0;
  img1.style.opacity = 0;

  img2.style.scale = 0;
  img2.style.opacity = 0;

  img3.style.scale = 0;
  img3.style.opacity = 0;

  img4.style.scale = 0;
  img4.style.opacity = 0;

  img5.style.scale = 0;
  img5.style.opacity = 0;

  img6.style.scale = 0;
  img6.style.opacity = 0;
});
