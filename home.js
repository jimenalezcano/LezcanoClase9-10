//Otro prompt para preguntarle ubicacion y luego condicional
//let ubicacion = prompt("De que zona sos?")


//if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
//    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
//}else{
//   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
//}

//Creo constructor para objeto usuario
class User {
    constructor(nombre, apellido, nombreUser, documento, email, barrio, direccion, pago) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.nombreUser = nombreUser;
        this.documento = documento;
        this.email = email;
        this.barrio = barrio;
        this.direccion = direccion;
        this.pago = pago;

}};


//Creo funcion para cargar datos de Usuario en el LocalStorage
function registrarUser(user) {
    var regUser = JSON.stringify(user);
    localStorage.setItem(nombre, regUser);
    console.log("Se guardo el cliente en LocalStorage")
    console.log("Se registraron los siguientes datos del cliente" + regUser)

}

registrarUser(user);


