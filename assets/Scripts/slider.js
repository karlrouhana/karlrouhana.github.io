"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider"),
  slides = document.querySelectorAll(".slider__slide"),
  slideCounter = document.getElementById("counter");

  var counter = 1;
  slideCounter.innerHTML = counter;

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
    counter = 1;
    slideCounter.innerHTML = counter;
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
    if(counter < slides.length){
      counter++;
    }
    slideCounter.innerHTML = counter;
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
  counter-- != 1 ? counter : counter = 1;
  slideCounter.innerHTML = counter;
}



