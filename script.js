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
