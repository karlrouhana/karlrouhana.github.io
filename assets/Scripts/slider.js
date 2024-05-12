"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  slider.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth"
  });
}


// Scroll Events
leftArrow.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
  }
});

