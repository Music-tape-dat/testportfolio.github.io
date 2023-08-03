let swipper = document.getElementById("swiper");
let next = document.getElementById("slider-next-btn");
let prev = document.getElementById("slider-prev-btn");
let caseStudybtn = document.getElementById("case-study-btn");
let sliderImagesElements = document.getElementsByClassName("slider-img-wrap");
let projectTechnologyImgElements = document.getElementsByClassName("tech-img");
let projectTechnologyNameElements =
  document.getElementsByClassName("tech-name");

let projectsDetails = [
  ["Phantom Samurai", ["HTML", "CSS", "JavaScript", "Physics"]],
  ["Music Tape", ["TailwindCSS", "ReactJs", "NodeJs", "MongoDb"]],
  ["Movie Paradise", ["HTML", "CSS", "ReactJs", "RestAPI"]],
  ["The Planets", ["HTML", "CSS", "ReactJs", "Redux"]],
  ["Phantom Samurai", ["HTML", "CSS", "JavaScript", "Physics"]],
];

let sliderImagesArray = [];

for (let i = 0; i < sliderImagesElements.length; i++) {
  sliderImagesArray.push([sliderImagesElements[i], projectsDetails[i]]);
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

prev.addEventListener("click", () => {
  //change positions of slider image array
  let sliderImgToMove = sliderImagesArray.shift();
  sliderImagesArray.push(sliderImgToMove);

  //case study link change
  caseStudybtn.href = sliderImagesArray[2][0].firstElementChild.href;

  //remove ids from slider image elements
  sliderImagesArray.map((imgEl) => {
    imgEl[0].removeAttribute("id");
  });

  //change ids of slider image elements
  sliderImagesArray[0][0].id = "lp2";
  sliderImagesArray[1][0].id = "lp1";
  sliderImagesArray[2][0].id = "mp";
  sliderImagesArray[3][0].id = "rp1";
  sliderImagesArray[4][0].id = "rp2";

  //chnage project title name
  document.getElementById("slider-project-name").innerHTML =
    sliderImagesArray[2][0].getAttribute("name");

  //chnage project technologies
  for (let i = 0; i < projectTechnologyImgElements.length; i++) {
    projectTechnologyImgElements[
      i
    ].src = `Assets/${sliderImagesArray[2][1][1][i]}.png`;

    projectTechnologyNameElements[i].innerHTML = sliderImagesArray[2][1][1][i];
  }
});

next.addEventListener("click", () => {
  //change positions of slider image array
  let sliderImgToMove = sliderImagesArray.pop();
  sliderImagesArray.unshift(sliderImgToMove);

  //case study link change
  caseStudybtn.href = sliderImagesArray[2][0].firstElementChild.href;

  //remove ids from slider image elements
  sliderImagesArray.map((imgEl) => {
    imgEl[0].removeAttribute("id");
  });

  //change ids of slider image elements
  sliderImagesArray[0][0].id = "lp2";
  sliderImagesArray[1][0].id = "lp1";
  sliderImagesArray[2][0].id = "mp";
  sliderImagesArray[3][0].id = "rp1";
  sliderImagesArray[4][0].id = "rp2";

  //chnage project title name
  document.getElementById("slider-project-name").innerHTML =
    sliderImagesArray[2][0].getAttribute("name");

  //chnage project technologies
  for (let i = 0; i < projectTechnologyImgElements.length; i++) {
    projectTechnologyImgElements[
      i
    ].src = `Assets/${sliderImagesArray[2][1][1][i]}.png`;

    projectTechnologyNameElements[i].innerHTML = sliderImagesArray[2][1][1][i];
  }
});

//when slider image horevered play video
sliderImagesArray.forEach((video) => {
  video[0].addEventListener("mouseenter", (e) => {
    setTimeout(() => {
      if (e.target.id === "mp") {
        e.target.firstElementChild.firstElementChild.play();
      }
    }, 400);
  });

  video[0].addEventListener("mouseleave", (e) => {
    console.log("leaving");
    e.target.firstElementChild.firstElementChild.pause();
  });
});
