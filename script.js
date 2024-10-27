// Validation du formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Variables des champs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Validation du champ nom
    if (name === "") {
        alert("Veuillez entrer votre nom.");
        return;
    }

    // Validation de l'email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    // Message de succès
    alert("Formulaire soumis avec succès !");
    document.getElementById("contactForm").reset();
});