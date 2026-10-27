let formLogin = document.getElementById('form_login');
let btnLogin = document.getElementById('inicioSesion');


//function(evento)=> al hacer click submit envia datos 
formLogin.addEventListener("submit", function (evento) {
    // Evita el envío automático del formulario
    evento.preventDefault();
    let NombreUsuario = document.getElementById('nombre').value;
    let password = document.getElementById('contrasena').value;

    //obtener los usuaarios guardados
    let usuarios = obtenerUsuarios();

    //check si ell usuario y password correcto
    let existe = false
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === NombreUsuario && usuarios[i].password === password) {
            existe = true;
            break;
        }
    }

    //si el user existe va ala pagina del bienvenido
    if(existe){
        // Guardamos el nombre del usuario en el baúl de la sesión activa
        sessionStorage.setItem("usuario_logueado", NombreUsuario);

        
        // Redirigimos a tu carpeta y archivo reales en minúsculas
        window.location.href = "../bienvenido/bienvenido.html";    
    }else{
        //usamos el dom y mostarmos el emnsaje de error


        //1.CREAR ELEMENTO
        let mensajeError=document.createElement("small");
        //ANADIR TEXTO
        mensajeError.textContent="Usuario o contraseña incorrectos";
        mensajeError.style.color="red";
        //4.mostar el emnsaje abajo del input 
        formLogin.appendChild(mensajeError);
    }


});