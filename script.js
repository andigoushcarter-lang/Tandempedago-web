// Affiche le champ "Précisez" si "Autre" est choisi
document.getElementById("niveau").addEventListener("change", function() {
    let champPrecisez = document.getElementById("precisez");
    if (this.value === "autre") {
        champPrecisez.style.display = "block";
        champPrecisez.required = true;
    } else {
        champPrecisez.style.display = "none";
        champPrecisez.required = false;
    }
});
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche l'envoi normal du formulaire

    // Récupération des valeurs
    let nom = document.querySelector("input[placeholder='Nom']").value;
    let tel = document.querySelector("input[placeholder='Téléphone']").value;
    let matiere = document.querySelector("select:nth-of-type(1)").value;
    let niveauSelect = document.querySelector("#niveau").value;
    let precisez = document.querySelector("#precisez").value;
    let adresse = document.querySelector("input[placeholder='Commune, quartier, etc.']").value;

    // Si "autre" est choisi → prendre le texte de "précisez"
    let niveau = (niveauSelect === "autre" && precisez.trim() !== "") ? precisez : niveauSelect;

    // Message formaté
    let message = `Bonjour, je m'appelle ${nom}.
Voici mes coordonnées et mon besoin :
📞 Téléphone : ${tel}
📚 Matière : ${matiere}
🎓 Niveau : ${niveau}
📍 Adresse : ${adresse}

Merci de bien vouloir considérer.`;

    // Ton numéro WhatsApp
    let numero = "2250151456427";

    // Ouverture de WhatsApp
    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(message), "_blank");
});


