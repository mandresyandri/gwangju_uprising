document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');
    const eventImages = document.querySelectorAll('.carousel-image');
    const eventDates = document.querySelectorAll('.event-date');
    const eventNumbers = document



    const descriptions = document.querySelectorAll('.description');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselBox = document.querySelector('.carousel-events'); 
    let currentIndex = 0;

    function getImageWidthWithGap() {
        const imageWidth = eventImages[0].clientWidth;
        const gap = parseFloat(getComputedStyle(carouselBox).gap) || 0; // Get the gap value
        return imageWidth + gap;
    }

    function updateCarousel() {
        eventImages.forEach((image, index) => {
            image.classList.toggle('active', index === currentIndex);
        });
        events.forEach((event, index) => {
            event.classList.toggle('active', index === currentIndex);
        });
        descriptions.forEach((description, index) => {
            description.classList.toggle('active', index === currentIndex);
        });

        // const translateXValue = -20 * currentIndex;
        // carouselBox.style.transform = `translateX(${translateXValue}rem)`;
        const translateXValue = -getImageWidthWithGap() * currentIndex;
        carouselBox.style.transform = `translateX(${translateXValue}px)`;

    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % eventImages.length;
        updateCarousel();
        if(currentIndex === eventImages.length - 1) {
            nextButton.style.visibility = 'hidden';
        } else {
            prevButton.style.visibility = 'visible';
        }

    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + eventImages.length) % eventImages.length;
        updateCarousel();
        if(currentIndex === 0) {
            prevButton.style.visibility = 'hidden';
        } else {
            nextButton.style.visibility = 'visible';
        }
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    updateCarousel();
});
