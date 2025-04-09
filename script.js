let special_btn = document.getElementById('special_btn');
special_btn.addEventListener('click', function () {
    let djime = document.getElementById('container')
    html2pdf().from(djime).save('cv.pdf')
})

function changerCouleur() {
    const couleurs = ["#000000", "rgb(79, 70, 70)"];
    const couleur = couleurs[Math.floor(Math.random() * couleurs.length)];
    document.querySelector(".cote_gauche").style.backgroundColor = couleur;
}

