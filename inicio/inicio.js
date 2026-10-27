let formulario = document.getElementById('form_login');
let btnLogin = document.getElementById('inicioSesion');


//function(evento)=> al hacer click submit envia datos 
btnLogin.addEventListener("Submit", function (evento) {
    // Evita el envío automático del formulario
    evento.preventDefault();
    let NombreUsuario = document.getElementById('nombre').value;
    let password = document.getElementById('contrasena').value;

    //obtener los usuaarios guardados
    let usuarios = obtenerUsuarios();

    //check si ell usuario y password correcto
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === NombreUsuario && usuarios[i].password === password) {
        //password+user=correcto---> ala pagina de bienvenido
        window.location.href="../Bienvenido/indexedDB.html";
    break;
    }



    }


});