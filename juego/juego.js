let btnCarta = document.createElement("button");

//imagen de reverso
const imagenReverso = "carta_reverso.png";
//array de todas imagenes
const cartas = [
    "01_simple_corazon.png",
    "02_simple_pica.png",
    "03_simple_diamante.png",
    "04_simple_trebol.png",
    "05_doble_corazon.png",
    "06_doble_pica.png",
    "07_doble_diamante.png",
    "08_doble_trebol.png",
    "09_as_corazon.png",
    "10_as_pica.png",
    "11_as_diamante.png",
    "12_as_trebol.png"
];
//cartas que esta probando el user
let cartasSeleccionadas = [];
let parejasEncontradas=0;

function getNivelElegido() {
    let nivelElegido = sessionStorage.getItem("dificultad_juego");
    return nivelElegido;
}




function numeroCartas(nivelElegido) {
    if (nivelElegido === "facil") {
        return 6;

    } else if (nivelElegido === "medio") {


        return 8;
    } else if (nivelElegido === "dificil") {

        return 12;
    }

}




function crearCartas(nivelElegido) {
    // obtener el numero de cartas segun el level elegido
    let numCartas = numeroCartas(nivelElegido);

    //elegir las imageens del array 
    let cartasEligidas = cartas.slice(0, numCartas);


    //concat() UNIR ARRAYS
    //let frutas=verduras.concat(frutas);
    // array.concat(array) → duplicar elementos.
    //array.concat(array) → duplicar elementos.
    let imgDuplicadas = cartasEligidas.concat(cartasEligidas);
    return imgDuplicadas;

}


function mostrarCartas(cartas) {


    //obtener  el div donde vamos a mostrar las cartas
    let tabla = document.getElementById("tablero");
    // Vaciar el tablero antes de mostrar las cartas
    tabla.innerHTML = "";

    //kola carta nduiroha f btn 
    cartas.forEach(nombreImagen => {


        // Crear un botón para cada carta
        let btnCarta = document.createElement("button");




        let imagenRevrso = document.createElement("img");
        imagenRevrso.src = imagenReverso;

        // Meter la imagen dentro del botón
        btnCarta.appendChild(imagenRevrso);
        // Meter el botón dentro del tablero
        tabla.appendChild(btnCarta);

        // Preparar el click de esta carta
        Voltearcarta(btnCarta, imagenRevrso, nombreImagen);

    });
}


/*

// Antes del click
imagenRevrso.src = imagenReverso; // ?

// Después del click
imagenRevrso.src = carta; // ♥

*/



function Voltearcarta(btnCarta, imagenRevrso, carta) {

    btnCarta.addEventListener("click", function () {

        // Si ya hay 2 cartas, no permitir otra
        if (cartasSeleccionadas.length === 2) {
            return;
        }


        // Mostrar imagen verdadera
        imagenRevrso.src = carta;
        //anadir la carta elegida para el usuario al array
        cartasSeleccionadas.push(carta);

           // Si tenemos 2 cartas, comparar
        if (cartasSeleccionadas.length === 2) {
            CompararParejas();
        }
    });

}



function CompararParejas() {
    let primeracarta = cartasSeleccionadas[0];
    let segundaCarta = cartasSeleccionadas[1];
    if (primeracarta === segundaCarta) {


        parejasEncontradas++;
    }else{


    }

}






