let swipper = document.getElementById("swiper");
let next = document.getElementById("slider-next-btn");
let prev = document.getElementById("slider-prev-btn");
let caseStudybtn = document.getElementById("case-study-btn");

let sliderImagesElements =
  document.getElementsByClassName("swiper-project-img");

let sliderImagesArray = [];

for (let i = 0; i < sliderImagesElements.length; i++) {
  sliderImagesArray.push(sliderImagesElements[i]);
}

//change background color of next and prev slider buttons when hovered
next.addEventListener("mouseenter", (e) => {
  e.target.src = "Assets/next slider hovered.png";
});

next.addEventListener("mouseleave", (e) => {
  e.target.src = "Assets/next slider.png";
});

prev.addEventListener("mouseenter", (e) => {
  e.target.src = "Assets/prev slider hovered.png";
});

prev.addEventListener("mouseleave", (e) => {
  e.target.src = "Assets/prev slider.png";
});

next.addEventListener("click", () => {
  //change positions of slider image array
  let sliderImgToMove = sliderImagesArray.shift();
  sliderImagesArray.push(sliderImgToMove);

  //case study link change
  caseStudybtn.href = sliderImagesArray[2].parentNode.href;

  //remove ids from slider image elements
  sliderImagesArray.map((imgEl) => {
    imgEl.removeAttribute("id");
  });

  //change ids of slider image elements
  sliderImagesArray[0].id = "lp2";
  sliderImagesArray[1].id = "lp1";
  sliderImagesArray[2].id = "mp";
  sliderImagesArray[3].id = "rp1";
  sliderImagesArray[4].id = "rp2";
});

prev.addEventListener("click", () => {
  //change positions of slider image array
  let sliderImgToMove = sliderImagesArray.pop();
  sliderImagesArray.unshift(sliderImgToMove);

  //case study link change
  caseStudybtn.href = sliderImagesArray[2].parentNode.href;

  //remove ids from slider image elements
  sliderImagesArray.map((imgEl) => {
    imgEl.removeAttribute("id");
  });

  //change ids of slider image elements
  sliderImagesArray[0].id = "lp2";
  sliderImagesArray[1].id = "lp1";
  sliderImagesArray[2].id = "mp";
  sliderImagesArray[3].id = "rp1";
  sliderImagesArray[4].id = "rp2";
});

//when slider image horevered play video
sliderImagesArray.forEach((video) => {
  video.addEventListener("mouseenter", (e) => {
    e.target.play();
  });

  video.addEventListener("mouseleave", (e) => {
    e.target.pause();
  });
});
