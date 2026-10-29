/* ==========================================
   1. OBTENER LOS BOTONES DE NIVEL
========================================== */

// creamos una variable y guardamos los 3 botones, quse llaman boton_nivel
  //GUARDAMOS LOS 3 BOTONES
let botonesNivel = document.querySelectorAll(".boton_nivel");


/* ==========================================
   2. RECORRER BOTONES Y GUARDAR NIVEL
========================================== */

// Recorremos los tres botones con un forEach
botonesNivel.forEach(function (boton) {
    
    // el evento de hacer click en cada botón
    boton.addEventListener("click", function () {
        
        // Leemos qué nivel tiene anotado este botón en su HTML (facil, medio o dificil)
        let nivelElegido = boton.getAttribute("data-nivel");

        //  Guardamos esa palabra en el baúl de la sesión actual
        sessionStorage.setItem("dificultad_juego", nivelElegido);

        // Redirigimos automáticamente a la carpeta del juego
        window.location.href = "../juego/juego.html";
    });
});
