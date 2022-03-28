import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
//Primero vamos a crear la dirección, teléfono y mail del contacto. Una vez lo tenemos, creamos el objeto de tipo Persona y le seteamos unas notas
var direcNoe = new Direccion("Calle Carretero", "17", "1", "A", "41100", "Coria del Río");
var telefNoe = new Telefono("Empresa", "954444123");
var mailNoe = new Mail("Empresa", "noedaw@gmail.com");
var noe = new Persona("Noelia", "Rodríguez García", "77882420A", new Date(1996, 3, 13), "Azul", "Mujer", direcNoe, telefNoe, mailNoe);
noe.setNotas("Reunión a las 10:00");
noe.setNotas("Pagar cena");
var direcIrene = new Direccion("Calle Pintor Zuolaga", "2", "2", "B", "11010", "Cádiz");
var telefIrene = new Telefono("Personal", "666443123");
var mailIrene = new Mail("Persona", "irenecadiz@gmail.com");
var irene = new Persona("Irene", "Martín Jiménez", "67223149B", new Date(2001, 2, 9), "Amarillo", "Mujer", direcIrene, telefIrene, mailIrene);
irene.setNotas("Mandar código typescript");
irene.setNotas("Perdí el correo");
var direcDani = new Direccion("Calle Almendralejo", "1", "4", "C", "41020", "Sevilla");
var telefDani = new Telefono("Personal", "612333123");
var mailDani = new Mail("Empresa", "dani@samsung.com");
var dani = new Persona("Daniel", "Sánchez Gómez", "12349523C", new Date(1998, 12, 5), "Negro", "Hombre", direcDani, telefDani, mailDani);
//Metemos los 3 contactos en un array que vamos a necesitar más adelante y así lo aprovechamos para mostrar por pantalla.
const contactos = new Array(noe, irene, dani);
//He creado una función para mostrar por pantalla el array porque tenemos que usarlo varias veces. 
mostrarConsola();
//Ahora vamos a modificar la dirección, el mail y el teléfono del registro de la persona con DNI 12349523C. Creamos 3 datos nuevos
var nuevaDireccion = new Direccion("Avenida de Eduardo Dato", "2", "5", "B", "41005", "Sevilla");
var nuevoTelefono = new Telefono("Empresa", "955431233");
var nuevoMail = new Mail("Personal", "dani03@gmail.com");
//Con el método .find encontramos qué contacto tiene ese DNI (de los que hay en el array contactos)
const modificar = contactos.find(contacto => contacto.DNI === "12349523C");
//Asignamos los nuevos datos
modificar.Direccion = nuevaDireccion;
modificar.telefono = nuevoTelefono;
modificar.mail = nuevoMail;
//Mostramos por consola con los cambios
console.log("CONTACTOS ACTUALIZADOS:");
mostrarConsola();
function mostrarConsola() {
    for (let contacto of contactos) {
        console.log(contacto.toString());
    }
}
