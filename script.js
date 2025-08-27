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
    let niveau = document.querySelector("#niveau").value;
    let adresse = document.querySelector("input[placeholder='Commune, quartier, etc.']").value;

    // Message formaté
    let message = `Bonjour, je m'appelle ${nom}.
📞 Téléphone : ${tel}
📚 Matière : ${matiere}
🎓 Niveau : ${niveau}
📍 Adresse : ${adresse}`;

    // Ton numéro WhatsApp
    let numero = "2250151456427";

    // Ouverture de WhatsApp
    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(message), "_blank");
});

