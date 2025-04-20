document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show message after 7 seconds
    setTimeout(() => {
        message.classList.add('show');
    }, 7000);

    // Start slideshow after 9 seconds (7 + 2)
    setTimeout(() => {
        startSlideshow();
    }, 9000);

    function startSlideshow() {
        // Show first slide
        slides[currentSlide].classList.add('active');

        // Change slides every 3 seconds
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    }
}); 