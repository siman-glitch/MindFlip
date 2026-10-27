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
