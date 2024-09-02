document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let slide = document.querySelector('.active');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            setTimeout(() => {
                slide.classList.toggle('visible', i === index);
            }, 500);
        });
    }

    function hideSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('invisible', i === index);
        });
    }

    function nextSlide() {
        hideSlide(currentIndex)
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 500);

    }

    function prevSlide() {
        hideSlide(currentIndex)
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }, 500);
    }

    nextBtn.addEventListener('click', () => { 
        clearInterval(autoSlideInterval);
        nextSlide();
     });
    prevBtn.addEventListener('click', () => { 
        clearInterval(autoSlideInterval);
        prevSlide(); 
    });

    showSlide(currentIndex);

    autoSlideInterval = setInterval(nextSlide, 8000);
});