// FADE //

const fadeEl = document.querySelector(".fade");

let hasScrolled = false;
window.addEventListener("scroll", () => {
  if (!hasScrolled) {
    fadeEl.style.opacity = "0.5";
    hasScrolled = true;
  }
});

// FILTERS //
const filtersEl = document.querySelector(".filters");
const projectEl1 = document.querySelector(".project:nth-child(1)");
const projectEl2 = document.querySelector(".project:nth-child(2)");
const projectEl3 = document.querySelector(".project:nth-child(3)");
const projectEl4 = document.querySelector(".project:nth-child(4)");
const projectEl5 = document.querySelector(".project:nth-child(5)");
const projectEl6 = document.querySelector(".project:nth-child(6)");
const htmlEl = document.querySelector("html");

filtersEl.addEventListener("click", (e) => {
  // remove fade when clickin on one of the filters, (like Game design)
  fadeEl.style.opacity = "0";

  // make clicked button active
  document
    .querySelector(".filter-btn--active")
    .classList.remove("filter-btn--active");
  e.target.classList.add("filter-btn--active");

  // change image opacities (remove this if you want the images when clicked on a filter to become bright again)
  htmlEl.style.setProperty("--default-opacity", "0.4");
  htmlEl.style.setProperty("--hover-opacity", "0.3");

  // reorganize grid
  const filterText = e.target.textContent;

  if (filterText === "all") {
    projectEl1.style.opacity = "1";
    projectEl1.style.transform = "scale(1)";
    projectEl2.style.opacity = "1";
    projectEl2.style.transform = "scale(1)";
    projectEl3.style.opacity = "1";
    projectEl3.style.transform = "scale(1)";
    projectEl4.style.opacity = "1";
    projectEl4.style.transform = "scale(1)";
    projectEl5.style.opacity = "1";
    projectEl5.style.transform = "scale(1)";
    projectEl6.style.opacity = "1";
    projectEl6.style.transform = "scale(1)";
  } else if (filterText === "3d & design") {
    projectEl3.style.opacity = "0";
    projectEl3.style.transform = "scale(0)";
    projectEl5.style.opacity = "0";
    projectEl5.style.transform = "scale(0)";
    projectEl6.style.opacity = "0";
    projectEl6.style.transform = "scale(0)";

    projectEl1.style.opacity = "1";
    projectEl1.style.transform = "scale(1)";

    projectEl2.style.opacity = "1";
    projectEl2.style.transform = "scale(1)";

    projectEl4.style.opacity = "1";
    projectEl4.style.transform = "scale(1)";
  } else if (filterText === "game design") {
    projectEl1.style.opacity = "0";
    projectEl1.style.transform = "scale(0)";
    projectEl2.style.opacity = "0";
    projectEl2.style.transform = "scale(0)";
    projectEl3.style.opacity = "0";
    projectEl3.style.transform = "scale(0)";
    projectEl4.style.opacity = "0";
    projectEl4.style.transform = "scale(0)";

    projectEl5.style.opacity = "1";
    projectEl5.style.transform = "scale(1)";
    projectEl6.style.opacity = "1";
    projectEl6.style.transform = "scale(1)";
  } else if (filterText === "frontend") {
    projectEl1.style.opacity = "0";
    projectEl1.style.transform = "scale(0)";
    projectEl2.style.opacity = "0";
    projectEl2.style.transform = "scale(0)";

    projectEl4.style.opacity = "0";
    projectEl4.style.transform = "scale(0)";
    projectEl5.style.opacity = "0";
    projectEl5.style.transform = "scale(0)";
    projectEl6.style.opacity = "0";
    projectEl6.style.transform = "scale(0)";

    projectEl3.style.opacity = "1";
    projectEl3.style.transform = "scale(1)";
  }
});
