let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Calculate the new slide index
    currentSlide += step;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    // Show the new slide
    slides[currentSlide].style.display = 'block';
}

// Initialize the slider by showing the first slide
moveSlide(0);
