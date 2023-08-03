let paginationContainer = document.getElementById("pagination-wrapper");

document.addEventListener("scroll", () => {
  if (scrollY >= window.innerHeight) {
    paginationContainer.style.position = "fixed";
  } else {
    paginationContainer.style.position = "absolute";
  }
});

let heroTitleSplitText = new SplitType("#hero-main-title");
let heroSubTitleSplitText = new SplitType("#hero-sub-title");
gsap.registerPlugin(ScrollTrigger);

const heroTimeLine = gsap.timeline({ defaults: { duration: 1 } });
heroTimeLine
  .to(heroTitleSplitText.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.04,
    delay: 0.2,
    duration: 0.01,
  })
  .to(heroSubTitleSplitText.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.02,
    duration: 0.01,
  });

// ABOUT ME PAGINATION ANIMATION
let paginationAboutMeText = new SplitType("#pagination-about-me");

gsap.to(paginationAboutMeText.chars, {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// SKILLS PAGINATION ANIMATION
let paginationSkillsText = new SplitType("#pagination-skills");

gsap.to(paginationSkillsText.chars, {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// PROJECTS PAGINATION ANIMATION
let paginationProjectsText = new SplitType("#pagination-projects");

gsap.to(paginationProjectsText.chars, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// CONTACT ME PAGINATION ANIMATION
let paginationContactMeText = new SplitType("#pagination-contact-me");

gsap.to(paginationContactMeText.chars, {
  scrollTrigger: {
    trigger: "#contact-me",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

//PAGINATION DOT ACTIVE HANDLE
let activePageDot = document.getElementById("about-me-dot");

let aboutMePageDot = document.getElementById("about-me-dot");
let skillsPageDot = document.getElementById("skills-dot");
let projectsPageDot = document.getElementById("projects-dot");
let contactMePageDot = document.getElementById("contact-me-dot");

document.addEventListener("scroll", () => {
  switch (scrollY) {
    default:
      break;
    case window.innerHeight * 4:
      activePageDot.classList.remove("active-dot");
      contactMePageDot.classList.add("active-dot");
      activePageDot = contactMePageDot;
      break;
    case window.innerHeight * 3:
      activePageDot.classList.remove("active-dot");
      projectsPageDot.classList.add("active-dot");
      activePageDot = projectsPageDot;
      break;
    case window.innerHeight * 2:
      activePageDot.classList.remove("active-dot");
      skillsPageDot.classList.add("active-dot");
      activePageDot = skillsPageDot;
      break;
    case window.innerHeight:
      activePageDot.classList.remove("active-dot");
      aboutMePageDot.classList.add("active-dot");
      activePageDot = aboutMePageDot;
      break;
  }
});

// MOBILE PAGINATION

// ABOUT ME PAGINATION ANIMATION
let paginationAboutMeTextMobile = new SplitType("#mobile-pagination-about-me");

gsap.to(paginationAboutMeTextMobile.chars, {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// SKILLS PAGINATION ANIMATION
let paginationSkillsTextMobile = new SplitType("#mobile-pagination-skills");

gsap.to(paginationSkillsTextMobile.chars, {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// PROJECTS PAGINATION ANIMATION
let paginationProjectsTextMobile = new SplitType("#mobile-pagination-projects");

gsap.to(paginationProjectsTextMobile.chars, {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});

// CONTACT ME PAGINATION ANIMATION
let paginationContactMeTextMobile = new SplitType(
  "#mobile-pagination-contact-me"
);

gsap.to(paginationContactMeTextMobile.chars, {
  scrollTrigger: {
    trigger: "#contact-me",
    start: "top 20%",
    end: "bottom 80%",
    toggleActions: "restart reverse restart reset",
  },
  y: 0,
  opacity: 1,
  stagger: 0.04,
  delay: 0.2,
  duration: 0.01,
});
