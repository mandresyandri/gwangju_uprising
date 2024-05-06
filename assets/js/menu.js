// récupération des éléments js 
let infoBtn = document.getElementById("menu-modal");
let closeBtn = document.getElementById("menu-modal-close");
let menuElements = document.querySelectorAll("point");

// ouvrir la modale
infoBtn.addEventListener("click", (e) => {
    // ouverture de la fenêtre modale
    document.querySelector(".landing-modal-window").style.display = "block";
    document.querySelector(".custom-filter-modal").style.display = "block";
})

// // fermer la modale
closeBtn.addEventListener("click", (e)=> {
    // fermeture de la modale
    document.querySelector(".landing-modal-window").style.display = "none";
    document.querySelector(".custom-filter-modal").style.display = "none";
})

// animation hover des éléments de menu
