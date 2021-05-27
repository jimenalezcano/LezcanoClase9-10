//Datos del usuario obtenidos desde HTML
 // var nombreusuario = document.getElementById("validationCustom01").value;

 // var apellido = document.getElementById("validationCustom02").value;

 // // var email = document.getElementById("validationCustomEmail").value;
//
 // var direccion = document.getElementById("validationCustomDir").value;

 // var barrio = document.getElementById("validationCustomBar").value;

// var pago = document.getElementById("validationCustomPago").value;

var nuevoUsuario = new User(
  "Jimena",
  "Lezcano",
  "jimenalezcano",
  "123.123.123",
  "jimenalezcano@gmail.com",
  "Palermo",
  "Calle 123",
  "Credito"

);
   AplicarDatosUserDom(nuevoUsuario )


const AplicarDatosUserDom = (user) => {
  var etiquetasDom = [
    "nombre",
    "apellido",
    "nombreUser",
    "documento",
    "email",
    "barrio",
    "direccion",
    "pago",

  ]

  etiquetasDom.forEach(e => {
    document.getElementById(e).innerHTML = user[e];
  });
};


