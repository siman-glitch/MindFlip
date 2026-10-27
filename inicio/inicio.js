
/* ==========================================
   1. OBTENER EL FORMULARIO
========================================== */

// Obtener el formulario del HTML
let formLogin = document.getElementById("form_login");

// Cuando el usuario pulsa "Iniciar sesión"
formLogin.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Llamar a la función
    iniciarSesion();
});


/* ==========================================
   2. FUNCIÓN PARA INICIAR SESIÓN
========================================== */

function iniciarSesion() {

    // 1. Obtener los datos del formulario
    let NombreUsuario = document.getElementById("nombre").value;
    let password = document.getElementById("contrasena").value;

    // 2. Obtener los usuarios guardados
    let usuarios = obtenerUsuarios();

    // 3. Comprobar si existe el usuario
    let existe = false;
    let idUsuario = "";

    // Recorrer todos los usuarios
    for (let i = 0; i < usuarios.length; i++) {

        // Comprobar nombre y contraseña
        if (usuarios[i].nombre === NombreUsuario && usuarios[i].password === password) {

            // El usuario existe
            existe = true;

            // Obtener el ID del usuario encontrado
            idUsuario = usuarios[i].id;

            break;
        }
    }


    // 4. SI EL USUARIO EXISTE
    if (existe) {

        // Guardar el nombre del usuario conectado
        sessionStorage.setItem("usuario_logueado", NombreUsuario);

        // Guardar el ID para utilizarlo en perfil
        //usuario_id:CLAVE PARA GURDAR EN SESION STORAGE
        sessionStorage.setItem("usuario_id", idUsuario);

        // Ir a la página de bienvenida
        window.location.href = "../bienvenido/bienvenido.html";

    } else {

        // 5. MOSTRAR MENSAJE DE ERROR

        // Buscar si ya existe un mensaje de error
        let mensajeError = document.getElementById("error_login");

        // Si no existe, crear el mensaje
        if (!mensajeError) {

            // Crear un elemento small
            mensajeError = document.createElement("small");

            // Asignar un ID
            mensajeError.id = "error_login";

            // Poner el texto en rojo
            mensajeError.style.color = "red";

            // Añadir el mensaje al formulario
            formLogin.appendChild(mensajeError);
        }

        // Mostrar el mensaje de error
        mensajeError.textContent = "Usuario o contraseña incorrectos";
    }
}
