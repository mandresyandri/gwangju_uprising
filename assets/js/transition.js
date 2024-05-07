const text = document.querySelector(".btn-text p");

text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 7.1}deg)">${char}</span>`
).join('');

// gestion du changement de page >> attendre 5 secondes
setTimeout(function() {
    window.location.href = "menu.html";
}, 5000); 