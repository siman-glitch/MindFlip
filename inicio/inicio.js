let formulario = document.getElementById('form_login');
let btnLogin = document.getElementById('inicioSesion');


//function(evento)=> al hacer click submit envia datos 
btnLogin.addEventListener("Submit", function (evento) {
    // Evita el envío automático del formulario
    evento.preventDefault();
    let user = document.getElementById('nombre').value;
    let password = document.getElementById('contrasena').value;

});