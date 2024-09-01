document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');
    const eventImages = document.querySelectorAll('.carousel-image');

    const descriptions = document.querySelectorAll('.description');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carouselBox = document.querySelector('.carousel-events'); 
    const progressBar = document.querySelector('.events-progress-progression');
    const progressDates = document.querySelectorAll('.events-progress li');
    let currentIndex = 0;

    function getImageWidthWithGap() {
        const imageWidth = eventImages[0].clientWidth;
        const gap = parseFloat(getComputedStyle(carouselBox).gap) || 0; // Get the gap value
        return imageWidth + gap;
    }

    function updateProgressBar() {
        const totalImages = events.length;
        const progressPercentage = (currentIndex / (totalImages - 1)) * 100;
        console.log(progressPercentage);
        progressBar.style.width = `${progressPercentage}%`;

        // Change date color if selected :
        progressDates.forEach((date, index) => {
            date.classList.toggle('active', index === currentIndex);
        });
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
        updateProgressBar();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % eventImages.length;
        updateCarousel();
        if(currentIndex === events.length - 1) {
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

    events.forEach((event) => {
        const action = event.dataset.action;
    
        switch (action) {
            case 'first':
                // Script for the first .event element
                event.addEventListener('click', () => {
                    currentIndex = 0;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'hidden';
                });
                break;
            case 'second':
                // Script for the second .event element
                event.addEventListener('click', () => {
                    currentIndex = 1;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'third':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 2;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'fourth':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 3;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'fifth':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 4;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'sixth':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 5;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'seventh':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 6;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'eighth':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 7;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;
            case 'ninth':
                // Script for the third .event element
                event.addEventListener('click', () => {
                    currentIndex = 8;
                    updateCarousel();
                    nextButton.style.visibility = 'visible';
                    prevButton.style.visibility = 'visible';
                });
                break;  
            case 'tenth':
            // Script for the third .event element
            event.addEventListener('click', () => {
                currentIndex = 9;
                updateCarousel();
                nextButton.style.visibility = 'hidden';
                prevButton.style.visibility = 'visible';
            });
            break;    
        }
    });
});


