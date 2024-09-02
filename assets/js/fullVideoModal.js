// récupération des éléments js 
let openBtnModal = document.querySelector(".middle > img");
let txtBtnModal = document.querySelector(".middle > span");
let closeBtnModal = document.querySelector(".modal-quit");
let modal = document.querySelector(".full-video-modal");
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


// Fonction qui ouvre la modale
function openModal() {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 1);
}

openBtnModal.addEventListener("click", openModal);
txtBtnModal.addEventListener("click", openModal);


// fermer la modale
closeBtnModal.addEventListener("click", (e)=> {
    // fermeture de la modale
    modal.style.opacity = "0";
    // Attendre 0.5 seconde avant de mettre display à none
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);

    // Arrêter la vidéo
    player.pause().then(function() {
    }).catch(function(error) {
        console.error('Erreur lors de la mise en pause de la vidéo:', error);
    });
})

// fermer la modale
modal.addEventListener("click", (e)=> {
    // fermeture de la modale
    modal.style.opacity = "0";
    // Attendre 0.5 seconde avant de mettre display à none
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);

    // Arrêter la vidéo
    player.pause().then(function() {
    }).catch(function(error) {
        console.error('Erreur lors de la mise en pause de la vidéo:', error);
    });
})

