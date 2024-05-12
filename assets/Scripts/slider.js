"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider"),
  slideCounter = document.getElementById("counter");

  var counter = 1;
  slideCounter.innerHTML = counter;


let timerId = setInterval(scrollRight, 5000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(scrollRight, 5000);
}
  
/**
 * @brief Scroll to the right
 */
function scrollRight() {
  resetTimer();
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
    counter++;
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


// Scroll Events
leftArrow.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
    resetTimer();
  }
});


