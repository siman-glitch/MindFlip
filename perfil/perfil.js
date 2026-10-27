// Obtener el ID del usuario que ha iniciado sesión
let idActual = sessionStorage.getItem("usuario_id");


function cargarPerfil(id) {
    // Obtener los usuarios guardados
    let usuarios = obtenerUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
        //si el id esta
        if (usuarios[i].id === id) {

            //return los datos de ese usuario
            return usuarios[i];
        }

    }
    // Si no encontramos el usuario
    return null;
}


let usuario = cargarPerfil(idActual);

function mostrarDatosPerfil() {

    if (usuario !== null) {
        let nombreUser = document.getElementById("perfil_usuario");
        let emailUser = document.getElementById("perfil_correo");

        let imagenPerfil = document.getElementById("imagen_perfil");
        let nombreVisible = document.getElementById("perfil_nombre_visible");


        nombreUser.value = usuario.nombre;
        emailUser.value = usuario.email;
        nombreVisible.textContent = usuario.nombre;

        if (usuario.imagen) {
            imagenPerfil.src = usuario.imagen;
        }
    }
}

mostrarDatosPerfil();


function guardarCambios() {

    //obtener los nuevos valores de los inputs
    let nombreNuevo = document.getElementById("perfil_usuario").value;
    let correoNuevo = document.getElementById("perfil_correo").value;
    let passwordNuevo = document.getElementById("perfil_password").value;
    let imagenPerfil = document.getElementById("imagen_perfil");

    // Obtener el archivo seleccionado en CAMBIAR FOTO
    let foto = document.getElementById("foto_perfil").files[0];


    // Obtener los usuarios guardados
    let usuarios = obtenerUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === idActual) {

            // 4. Sustituir los datos antiguos por los nuevos
            // . Modificar el array en JavaScript
            usuarios[i].nombre = nombreNuevo;
            usuarios[i].email = correoNuevo;

            // Cambiar la contraseña solo si el usuario escribe una nueva
            if (passwordNuevo !== "") {
                usuarios[i].password = passwordNuevo;
            }

            // IMAGEN:
            // Si el usuario ha seleccionado una foto nueva
            if (foto) {

                // Crear un lector para leer el archivo
                let lector = new FileReader();

                // Cuando termine de leer la imagen
                lector.onload = function () {

                    // Guardar la imagen en el usuario
                    usuarios[i].imagen = lector.result;

                    // 5. Guardar el array actualizado en localStorage
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));

                    // Mostrar la nueva imagen en la página
                    imagenPerfil.src = lector.result;

                };

                // Convertir la imagen a Base64 para poder guardarla
                lector.readAsDataURL(foto);

            } else {

                // Si no ha cambiado la foto, guardar los otros datos
                // y mantener la imagen anterior
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
            }


            // 6. Actualizar el nombre visible en la página
            document.getElementById("perfil_nombre_visible").textContent = nombreNuevo;

            // Actualizar el nombre guardado en la sesión
            sessionStorage.setItem("usuario_logueado", nombreNuevo);

            break;

        }
    }
}

// Si usamos el ID del botón, escuchamos "click".
// Si usamos el ID del formulario, escuchamos "submit".
// Al enviar el formulario, evitamos recargar la página y guardamos los cambios.
// Ejecutar guardarCambios cuando se envía el formulario
document.getElementById("form_perfil").addEventListener("submit", function (evento) {

    // Evitar que se recargue la página
    evento.preventDefault();

    // Guardar los datos modificados
    guardarCambios();

});