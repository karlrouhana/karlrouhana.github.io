"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider"),
  slideCounter = document.getElementById("counter");

// Define the array of slides
const slides = document.querySelectorAll(".slider__slide");

// Calculate total number of slides
const totalSlides = slides.length;

// Initialize counter and update slide counter
let counter = 1;
slideCounter.innerHTML = counter;

// Set initial scroll position to the first slide
slides[0].scrollIntoView({ behavior: "auto", block: "start" });

// Adding event listeners to arrow buttons
leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  // Get the index of the current slide
  const currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains(`slide${counter}`));

  // Scroll to the next slide if not at the end
  if (currentSlideIndex < totalSlides - 1) {
    const nextSlide = slides[currentSlideIndex + 1];
    nextSlide.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    counter++;
  } else {
    // If at the end, scroll to the first slide
    slides[0].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    counter = 1;
  }

  // Update slide counter
  slideCounter.innerHTML = counter;
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  // Get the index of the current slide
  const currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains(`slide${counter}`));

  // Scroll to the previous slide if not at the beginning
  if (currentSlideIndex > 0) {
    const prevSlide = slides[currentSlideIndex - 1];
    prevSlide.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    counter--;
  } else {
    // If at the beginning, scroll to the last slide
    slides[totalSlides - 1].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    counter = totalSlides;
  }

  // Update slide counter
  slideCounter.innerHTML = counter;
}
