const slider = document.querySelector(".slider");
const slideItems = document.querySelectorAll(".slider__item");
const controlDots = document.querySelectorAll(".control .dot");
let indexItem = 0;

setInterval(() => {
  // const slideItems = document.querySelectorAll(".slider__item");
  indexItem = indexItem + 1 >= slideItems.length ? 0 : indexItem + 1;
  document.querySelector(".slider__item.active").classList.remove("active");
  document.querySelector(".control .dot.active").classList.remove("active");
  slideItems[indexItem].classList.add("active");
  controlDots[indexItem].classList.add("active");
  // document.querySelector(".slider").appendChild(slideItems[0]);
}, 2000);
