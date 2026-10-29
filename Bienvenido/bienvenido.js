document.addEventListener("DOMContentLoaded", function () {
    // 1. Buscamos el nombre que guardó el registro en la sesión
    let nombreUsuarioActivo = sessionStorage.getItem("usuario_logueado");

    // 2. Buscamos la etiqueta <h1> mediante el ID que acabamos de asignar
    let contenedorSaludo = document.getElementById("saludo_usuario");

    // 3. Si el nombre existe en la memoria, cambiamos el texto automáticamente
    if (nombreUsuarioActivo && contenedorSaludo) {
        contenedorSaludo.textContent = `¡Bienvenido, ${nombreUsuarioActivo}!`;
    }
});



//creamos una variable y y seleccionamos el boton de l html y lo metemos dentro de esa variable
let botonJugarAhora = document.querySelector(".boton_jugar");

//llamamos a la variable,
botonJugarAhora.addEventListener("click", function (evento) {

     evento.preventDefault();

    
    window.location.href = "../dificultad/dificultad.html";
});

 



/* ==========================================
   BOTÓN MI PERFIL (Redirección)
========================================= */

// Buscamos el botón de MI PERFIL por su clase
let botonMiPerfil = document.querySelector(".boton_perfil");

// Escuchamos el evento de hacer click
botonMiPerfil.addEventListener("click", function (evento) {
    
    // Evitamos la acción por defecto del enlace
    evento.preventDefault();

    // Redirigimos directo a la carpeta y archivo de perfil en minúsculas
    window.location.href = "../perfil/perfil.html";
});

