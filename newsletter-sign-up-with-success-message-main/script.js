document.getElementById("myform").addEventListener('submit',function(event){
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var errorText = document.getElementById("echec");
    var successMessage = document.getElementById("succes");
    var formvalide = document.getElementById('contnair');
    var email = emailInput.value;
    // Vérification de la syntaxe de l'e-mail en utilisant une expression régulière
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorText.innerHTML = "valid mail required";
        errorText.classList = "echec";
        successMessage.className = "hidden";
        emailInput.classList = "echecForm";
      }else {
        // Afficher le message de félicitations et masquer le message d'erreur
    console.log(formvalide);
    formvalide.className = "hidden";
    errorText.innerHTML = "";
    errorText.className = "hidden";
    successMessage.className = "succes";
      }
})