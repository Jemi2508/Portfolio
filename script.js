let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.dots-container');

// Initialize dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const dots = document.querySelectorAll('.dot');

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto change every 3 seconds
setInterval(() => changeSlide(1), 3000);
