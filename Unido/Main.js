class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion) {
        //Para la provincia se me ha ocurrido reutilizar código del anterior laboratorio, y así no tenemos que pasar la provincia por parámetro
        this.provincia = "0";
        this.arrayProvincias = ["Alava", "Albacete", "Alicante", "Almeria", "Avila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Castellon",
            "Ciudad Real", "Cordoba", "La Corunia", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen", "Leon", "Lerida", "La Rioja",
            "Lugo", "Madrid", "Malaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz De Tenerife", "Cantabria",
            "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this.setProvincia(); //seteamos 
    }
    get calle() {
        return this._calle;
    }
    set calle(calle) {
        this._calle = calle;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get piso() {
        return this._piso;
    }
    set piso(piso) {
        this._piso = piso;
    }
    get letra() {
        return this._letra;
    }
    set letra(letra) {
        this._letra = letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    set codigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    setProvincia() {
        let i = this._codigoPostal.substring(0, 2);
        this.provincia = this.arrayProvincias[parseInt(i) - 1];
    }
    toString() {
        return this._calle + ", " + "número: " + this._numero + ", " + this._piso + "º" + this._letra + "\n" +
            "Código postal: " + this._codigoPostal + "\n" +
            "Población: " + this._poblacion + "\n" +
            "Provincia: " + this.provincia;
    }
}
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    toString() {
        return "Tipo: " + this._tipo + ", " + this._numero;
    }
}
class Mail {
    constructor(tipo, mail) {
        this._tipo = tipo;
        this._mail = mail;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get mail() {
        return this._mail;
    }
    set mail(mail) {
        this._mail = mail;
    }
    toString() {
        return "Tipo: " + this._tipo + ", " + this._mail;
    }
}
class Persona {
    constructor(nombre, apellidos, DNI, cumple, colorFavorito, sexo, direccion, telefono, mail) {
        this._edad = 0; //La edad la vamos a calcular a partir de la fecha de nacimiento, así que la inicializamos en 0
        this._notas = new Array("Sin notas");
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._DNI = DNI;
        this._cumple = cumple;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this.setEdad();
        this._direccion = direccion;
        this._telefono = telefono;
        this._mail = mail;
    }
    //Getters and Setters
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get DNI() {
        return this._DNI;
    }
    set DNI(DNI) {
        this._DNI = DNI;
    }
    getEdad() {
        return this._edad;
    }
    setEdad() {
        let ahora = new Date();
        this._edad = ahora.getFullYear() - this._cumple.getFullYear(); //Calculamos la edad con la fecha actual y la de nacimiento
    }
    get cumple() {
        return this._cumple;
    }
    set cumple(cumple) {
        this._cumple = cumple;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    getNotas() {
        return this._notas;
    }
    setNotas(notas) {
        for (let i of this._notas) {
            if (i == "Sin notas") {
                this._notas.pop(); //Borramos el "Sin notas" que aparece por defecto antes de añadirle una nueva
            }
        }
        this._notas.push(notas);
    }
    get Direccion() {
        return this._direccion;
    }
    set Direccion(direccion) {
        this._direccion = direccion;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get mail() {
        return this._mail;
    }
    set mail(mail) {
        this._mail = mail;
    }
    toString() {
        return "Nombre: " + this._nombre + "\n" +
            "Apellidos: " + this._apellidos + "\n" +
            "DNI: " + this._DNI + "\n" +
            "Cumpleaños: " + this._cumple.getDate() + "/" + this._cumple.getMonth() + "/" + this._cumple.getFullYear() + "\n" +
            "Edad: " + this._edad + "\n" +
            "Color Favorito: " + this._colorFavorito + "\n" +
            "Sexo: " + this._sexo + "\n" +
            "Notas: " + this._notas + "\n" +
            "Direccion: " + this._direccion + "\n" +
            "Teléfono: " + this._telefono + "\n" +
            "Mail: " + this._mail + "\n";
    }
}
//MAIN: 
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
