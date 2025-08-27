// --- Gérer l'affichage du champ "Précisez" ---
const niveauEl = document.getElementById("niveau");
const precisezEl = document.getElementById("precisez");

function togglePrecisez() {
  if (niveauEl.value === "autre") {
    precisezEl.style.display = "block";
    precisezEl.required = true;
  } else {
    precisezEl.style.display = "none";
    precisezEl.required = false;
    precisezEl.value = ""; // vider si non utilisé
  }
}

// appeler au changement et aussi au chargement (au cas où)
niveauEl.addEventListener("change", togglePrecisez);
document.addEventListener("DOMContentLoaded", togglePrecisez);

// --- Soumission du formulaire vers WhatsApp ---
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Récupération propre des valeurs
  const nom = document.getElementById("nom").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const matiere = document.getElementById("matiere").value;
  const niveauSelect = document.getElementById("niveau").value;
  const precisez = document.getElementById("precisez").value.trim();
  const adresse = document.getElementById("adresse").value.trim();

  // Si "autre" est choisi et que le champ "précisez" est rempli → utiliser ce texte
  const niveau = (niveauSelect === "autre" && precisez !== "") ? precisez : niveauSelect;

  // Si, par malchance, niveau est vide, indiquer 'Non précisé'
  const niveauFinal = niveau && niveau !== "" ? niveau : "Non précisé";

  // Message (format demandé : première ligne "Bonjour, je m'appelle X.")
  const message =
`Bonjour, je m'appelle ${nom}.
Voici mes coordonnées et mon besoin :
📞 Téléphone : ${telephone}
📚 Matière : ${matiere}
🎓 Niveau : ${niveauFinal}
📍 Adresse : ${adresse}

Merci de bien vouloir considérer.`;

  // Ton numéro WhatsApp (sans + ni espaces) — remplace si besoin
  const numero = "2250151456427";

  // Ouvrir WhatsApp (nouvel onglet)
  const waUrl = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
  window.open(waUrl, "_blank");
});
