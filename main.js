// JavaScript to activate the hamburger button
const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Function to change te slide (previous or next)
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Function to display a specific slide
function showSlide(n) {
    const slides = document.querySelectorAll(".carousel-slide img");

    if (n >= slides.length) {
        slideIndex = 0; // If we reach the end, start from the first slide
    }
    if (n < 0) {
        slideIndex = slides.length -1; // If we go back from the first slide, display the last one
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all the slides
    }

    slides[slideIndex].style.display = "block"; // Display the current slide
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialite the crrousel
    var myCarousel = new bootstrap.Carousel(document.querySelector('.carousel-container'), {
        interval: 2000 // Interval miliseconds
    });
});
