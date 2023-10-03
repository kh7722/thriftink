function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transition = 'transform 0.3s ease-in-out';
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Initial update
updateCarousel();
