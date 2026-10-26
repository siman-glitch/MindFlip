// Función para obtener los usuarios guardados en localStorage
function obtenerUsuarios() {

    // getItem("usuarios"): busca los usuarios guardados
    // JSON.parse(): convierte el texto guardado en un array de JavaScript
    // || []: si no hay usuarios guardados, devuelve un array vacío
    // return: devuelve el array de usuarios
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}