
/* ==========================
   1. IMAGENES Y VARIABLES
========================== */

// Imagen de la parte de atras de las cartas
const imagenReverso = "../recursos/imagenes/carta_reverso.png";

// Todas las imagenes del juego
const cartas = [
    "../recursos/imagenes/01_simple_corazon.png",
    "../recursos/imagenes/02_simple_pica.png",
    "../recursos/imagenes/03_simple_diamante.png",
    "../recursos/imagenes/04_simple_trebol.png",
    "../recursos/imagenes/05_doble_corazon.png",
    "../recursos/imagenes/06_doble_pica.png",
    "../recursos/imagenes/07_doble_diamante.png",
    "../recursos/imagenes/08_doble_trebol.png",
    "../recursos/imagenes/09_as_corazon.png",
    "../recursos/imagenes/10_as_pica.png",
    "../recursos/imagenes/11_as_diamante.png",
    "../recursos/imagenes/12_as_trebol.png"
];

// Guarda las dos cartas elegidas por el usuario
let cartasSeleccionadas = [];

// Numero de parejas correctas
let parejasEncontradas = 0;


/* ==========================
   2. OBTENER DIFICULTAD
========================== */

function getNivelElegido() {

    // Leer el nivel guardado en sessionStorage
    let nivelElegido = sessionStorage.getItem("dificultad_juego");

    return nivelElegido;
}


/* ==========================
   3. NUMERO DE PAREJAS
========================== */

function numeroCartas(nivelElegido) {

    // Facil: 6 parejas = 12 cartas
    if (nivelElegido === "facil") {
        return 6;

    // Medio: 8 parejas = 16 cartas
    } else if (nivelElegido === "medio") {
        return 8;

    // Dificil: 12 parejas = 24 cartas
    } else if (nivelElegido === "dificil") {
        return 12;
    }
}


/* ==========================
   4. PREPARAR LAS CARTAS
========================== */

function crearCartas(nivelElegido) {

    // Obtener el numero de parejas del nivel
    let numCartas = numeroCartas(nivelElegido);

    // Elegir las imagenes necesarias
    let cartasElegidas = cartas.slice(0, numCartas);

    // Duplicar las imagenes para formar parejas
    let imgDuplicadas = cartasElegidas.concat(cartasElegidas);

    // Mezclar las cartas de forma sencilla
    imgDuplicadas.sort(() => Math.random() - 0.5);

    // Devolver las cartas mezcladas
    return imgDuplicadas;
}


/* ==========================
   5. MOSTRAR LAS CARTAS
========================== */

function mostrarCartas(cartasJuego) {

    // Buscar el tablero en HTML
    let tabla = document.getElementById("tablero");

    // Vaciar el tablero
    tabla.innerHTML = "";

    // Recorrer todas las cartas
    cartasJuego.forEach(nombreImagen => {

        // Crear un boton para cada carta
        let btnCarta = document.createElement("button");

        // Crear una imagen dentro del boton
        let imgReversoPosition = document.createElement("img");

        // Mostrar primero la parte de atras
        imgReversoPosition.src = imagenReverso;

        // Meter la imagen dentro del boton
        btnCarta.appendChild(imgReversoPosition);

        // Meter el boton dentro del tablero
        tabla.appendChild(btnCarta);

        // Preparar el clic de esta carta
        Voltearcarta(btnCarta, imgReversoPosition, nombreImagen);
    });
}


/* ==========================
   6. VOLTEAR UNA CARTA
========================== */

function Voltearcarta(btnCarta, imagenRevrso, carta) {

    // Cuando el usuario hace clic en una carta
    btnCarta.addEventListener("click", function () {

        // Si ya hay dos cartas elegidas, no aceptar otra
        if (cartasSeleccionadas.length === 2) {
            return;
        }

        // Bloquear esta carta para evitar dos clics
        btnCarta.disabled = true;

        // Mostrar la imagen verdadera
        imagenRevrso.src = carta;

        // Guardar los datos de la carta seleccionada
        cartasSeleccionadas.push({

            // Ruta de la imagen para comparar
            carta: carta,

            // Elemento HTML img para cambiar su src
            imagen: imagenRevrso,

            // Boton para bloquearlo o desbloquearlo
            boton: btnCarta
        });

        // Cuando hay dos cartas, compararlas
        if (cartasSeleccionadas.length === 2) {
            CompararParejas();
        }
    });
}


/* ==========================
   7. COMPARAR PAREJAS
========================== */

function CompararParejas() {

    // Obtener la primera carta del array
    let primeraCarta = cartasSeleccionadas[0];

    // Obtener la segunda carta del array
    let segundaCarta = cartasSeleccionadas[1];

    // Comprobar si las dos imagenes son iguales
    if (primeraCarta.carta === segundaCarta.carta) {

        // Sumar una pareja correcta
        parejasEncontradas++;

        // Las cartas iguales se quedan descubiertas
        // Los botones siguen bloqueados

        // Vaciar el array para elegir otra pareja
        cartasSeleccionadas = [];

    } else {

        // Si son diferentes, esperar un segundo
        setTimeout(function () {

            // Volver a mostrar el reverso
            primeraCarta.imagen.src = imagenReverso;
            segundaCarta.imagen.src = imagenReverso;

            // Permitir volver a pulsar estas cartas
            primeraCarta.boton.disabled = false;
            segundaCarta.boton.disabled = false;

            // Vaciar el array para elegir otra pareja
            cartasSeleccionadas = [];

        }, 1000);
    }
}


/* ==========================
   8. INICIAR EL JUEGO
========================== */

function jugar() {

    // Obtener la dificultad elegida
    let nivel = getNivelElegido();

    // Crear las parejas y mezclar las cartas
    let cartasJuego = crearCartas(nivel);

    // Mostrar todas las cartas en el tablero
    mostrarCartas(cartasJuego);
}

// Iniciar el juego
jugar();
