function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Verifica se ambos os campos estão preenchidos
    if(email && password) {
        // Exibe um pop-up com as informações de email e senha
        alert("Email: " + email + "\nPassword: " + password);
    } else {
        alert("Por favor, preencha ambos os campos de email e senha.");
    }
}
