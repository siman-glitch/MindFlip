
/* ==========================================
   1. OBTENER ELEMENTOS DEL HTML
========================================== */

let imagen = document.getElementById("imagen");
let avatar = document.getElementById("avatar");
let formRegistro = document.getElementById("form_registro");

// Guardar la imagen convertida en texto
let imagenGuardada = "";


/* ==========================================
   2. MOSTRAR LA IMAGEN DE PERFIL
========================================== */

// Cuando el usuario elige una imagen
imagen.addEventListener("change", mostrarImagen);

function mostrarImagen() {

    // Obtener el archivo seleccionado
    let archivo = imagen.files[0];

    if (archivo) {

        // Comprobar que sea una imagen
        if (!archivo.type.startsWith("image/")) {
            alert("Selecciona una imagen válida");
            return;
        }

        // Leer la imagen
        let lector = new FileReader();

        lector.onload = function () {

            // Convertir la imagen en texto Base64
            imagenGuardada = lector.result;

            // Mostrar la imagen en el avatar
            avatar.innerHTML = `<img src="${imagenGuardada}" alt="Avatar">`;
        };

        lector.readAsDataURL(archivo);
    }
}


/* ==========================================
   3. FORMULARIO DE REGISTRO
========================================== */

// Cuando el usuario pulsa "Crear cuenta"
formRegistro.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Llamar a la función de registro
    registrarUsuario();
});


/* ==========================================
   4. FUNCIÓN PARA REGISTRAR USUARIO
========================================== */

function registrarUsuario() {

    // 1. Obtener los datos del formulario
    let user = document.getElementById("registro_usuario").value;
    let email = document.getElementById("registro_correo").value;
    let contrasena = document.getElementById("registro_password").value;
    let confirmoPassw = document.getElementById("registro_confirmar").value;


    // 2. Limpiar los mensajes anteriores
    document.getElementById("error_correo").textContent = "";
    document.getElementById("error_password").textContent = "";
    document.getElementById("mensaje_registro").textContent = "";


    // 3. Comprobar si las contraseñas coinciden
    if (contrasena === confirmoPassw) {

        // Obtener los usuarios guardados
        let usuarios = obtenerUsuarios();

        // Indicar que el correo todavía no existe
        let userExist = false;


        // 4. Buscar si el correo ya está registrado
        for (let i = 0; i < usuarios.length; i++) {

            if (usuarios[i].email === email) {
                userExist = true;
                break;
            }
        }


        // 5. Comprobar si el correo existe
        if (userExist) {

            document.getElementById("error_correo").textContent =
                "Ya existe una cuenta con este correo electrónico";

        } else {

            // 6. Crear un nuevo usuario
            let nuevoUsuario = {
                id: crypto.randomUUID(),
                nombre: user,
                email: email,
                password: contrasena,
                imagen: imagenGuardada
            };


            // 7. Añadir el usuario al array
            usuarios.push(nuevoUsuario);


            // 8. Guardar los usuarios en localStorage
            try {

                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                // 9. Ir a Inicio para iniciar sesión
                window.location.href = "../inicio/inicio.html";

            } catch (error) {

                // Mostrar error si no hay espacio para guardar
                document.getElementById("mensaje_registro").textContent =
                    "No se pudo guardar la cuenta. Prueba con una imagen más pequeña";
            }
        }

    } else {

        // 10. Mostrar error si las contraseñas son diferentes
        document.getElementById("error_password").textContent =
            "Las contraseñas no coinciden";
    }
}
