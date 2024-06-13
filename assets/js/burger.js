document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Ouverture du menu burger
    burgerMenuBtn.addEventListener('click', function() {
        burgerMenuOverlay.classList.add('active');
    });

    // Fermeture du menu burger
    function closeMenu() {
        burgerMenuOverlay.classList.remove('active');
    }

    // Fermeture du menu en cliquant sur le bouton de fermeture
    closeBtn.addEventListener('click', closeMenu);

    // Fermeture du menu en cliquant en dehors du menu
    burgerMenuOverlay.addEventListener('click', function(event) {
        if (event.target === burgerMenuOverlay) {
            closeMenu();
        }
    });
});