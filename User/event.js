//Creo funcion para utilizar sobre un evento

function usuarioDisponible () {
    console.log("El usuario esta disponible");
};

//Creo evento en input "nombreUser" para validar si el usuario esta disponible. Utilizo el event "change" que lo que hace es responder cuando hay un cambio en el input. 
var inputUsuario = document.getElementById("nombreUser")

inputUsuario.addEventListener("change", usuarioDisponible);