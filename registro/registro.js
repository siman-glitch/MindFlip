
let formRegistro = document.getElementById("form_registro");

formRegistro.addEventListener("submit", function (evento) {
    evento.preventDefault();

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

        // Obtener los usuarios guardados en localStorage
        let usuarios = obtenerUsuarios();
        let userExist = false;

        // 4. Buscar si el correo ya está registrado
        for (let i = 0; i < usuarios.length; i++) {

            if (usuarios[i].email === email) {
                userExist = true;
                break;
            }
        }

        // 5. Si existe, mostrar mensaje de error
        if (userExist) {
            document.getElementById("error_correo").textContent =
                "Ya existe una cuenta con este correo electrónico";

        } else {

            // 6. Crear un nuevo usuario
            let nuevoUsuario = {
                id: crypto.randomUUID(),
                nombre: user,
                email: email,
                password: contrasena
            };

            // 7. Añadir el usuario al array
            usuarios.push(nuevoUsuario);

            // 8. Convertir el array en texto y guardarlo en localStorage
            // localStorage: almacenamiento del navegador
            // setItem(): guarda o actualiza un dato
            // "usuarios": clave donde guardamos los datos
            // JSON.stringify(): convierte el array en texto
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
             
            // 8.5 Guardar el nombre en la sesión actual y redirigir
            sessionStorage.setItem("usuario_logueado", user);
            window.location.href = "../bienvenido/bienvenido.html";

            // 9. Mostrar mensaje de éxito
            document.getElementById("mensaje_registro").textContent =
                "Cuenta creada correctamente";
        }

    } else {

        // 10. Mostrar error si las contraseñas son diferentes
        document.getElementById("error_password").textContent =
            "Las contraseñas no coinciden";
    }
});
