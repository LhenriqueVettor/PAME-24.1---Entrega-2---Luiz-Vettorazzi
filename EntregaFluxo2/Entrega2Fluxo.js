function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    

    if(email && password) {
        alert("Bem vindo!\nEmail: " + email + "\nSenha: " + password);
    } else {
        alert("Pelo menos um dos campos não está preenchido");
    }
    return false;
}
