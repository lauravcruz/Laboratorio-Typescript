class Direccion{
    private _calle: string; 
    private _numero: string; 
    private _piso: string; 
    private _letra: string; 
    private _codigoPostal: string; 
    private _poblacion: string; 

    //Para la provincia se me ha ocurrido reutilizar código del anterior laboratorio, y así no tenemos que pasar la provincia por parámetro
    private provincia: string = "0"; 
    private arrayProvincias: string[] = ["Alava", "Albacete", "Alicante", "Almeria", "Avila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Castellon",
    "Ciudad Real", "Cordoba", "La Corunia", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipuzcoa", "Huelva", "Huesca", "Jaen", "Leon", "Lerida", "La Rioja",
    "Lugo", "Madrid", "Malaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz De Tenerife", "Cantabria",
    "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];


    constructor (calle: string, numero: string, piso: string, letra: string, codigoPostal: string, poblacion: string){
        this._calle = calle; 
        this._numero = numero; 
        this._piso = piso; 
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion; 
        this.setProvincia(); //seteamos 
    }

    public get calle(): string{
        return this._calle; 
    }

    public set calle(calle: string) {
        this._calle = calle; 
    }

    public get numero(): string{
        return this._numero; 
    }

    public set numero(numero: string) {
        this._numero = numero; 
    }

    public get piso(): string{
        return this._piso; 
    }

    public set piso(piso: string) {
        this._piso = piso; 
    }

    public get letra(): string{
        return this._letra; 
    }

    public set letra(letra: string) {
        this._letra = letra; 
    }

    public get codigoPostal(): string{
        return this._codigoPostal; 
    }

    public set codigoPostal(codigoPostal: string) {
        this._codigoPostal = codigoPostal; 
    }

    public get poblacion(): string{
        return this._poblacion; 
    }

    public set poblacion(poblacion: string) {
        this._poblacion = poblacion; 
    }

    public getProvincia(): string{
        return this.provincia; 
    }

    public setProvincia() {
        let i: string = this._codigoPostal.substring(0,2); 
        this.provincia = this.arrayProvincias[parseInt(i) - 1];
    }
    
    public toString(){ 
        return this._calle + ", " + "número: " + this._numero + ", "  + this._piso + "º" + this._letra + "\n" +
        "Código postal: " + this._codigoPostal + "\n" +
        "Población: " + this._poblacion + "\n" + 
        "Provincia: " + this.provincia;
    }

}

class Telefono {

    private _tipo: string; 
    private _numero: string;

    constructor(tipo: string, numero: string){
        this._tipo = tipo; 
        this._numero = numero; 
    }

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(tipo: string) {
        this._tipo = tipo;
    }

    public get numero(): string {
        return this._numero;
    }
    public set numero(numero: string) {
        this._numero = numero;
    }

    public toString(){
        return "Tipo: " + this._tipo + ", " + this._numero;
    }

}

class Mail {
    private _tipo: string; 
    private _mail: string; 

    constructor (tipo: string, mail: string){
        this._tipo = tipo; 
        this._mail = mail; 
    }

    public get tipo(): string {
        return this._tipo;
    }

    public set tipo(tipo: string) {
        this._tipo = tipo;
    }

    public get mail(): string {
        return this._mail;
    }

    public set mail(mail: string) {
        this._mail = mail;
    }

    public toString(){
        return "Tipo: " + this._tipo + ", " + this._mail;
    }
}

class Persona {

    private _nombre: string; 
    private _apellidos: string; 
    private _edad: number = 0; //La edad la vamos a calcular a partir de la fecha de nacimiento, así que la inicializamos en 0
    private _DNI: string; 
    private _cumple: Date; 
    private _colorFavorito: string;
    private _sexo: string; 
    private _notas: string [] = new Array ("Sin notas"); 
    private _direccion: Direccion;
    private _telefono: Telefono; 
    private _mail: Mail; 

    constructor(nombre: string, apellidos: string, DNI: string, cumple: Date, colorFavorito: string, sexo: string, direccion: Direccion, telefono: Telefono, mail: Mail){
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

    public get nombre(): string{
        return this._nombre; 
    }

    public set nombre(nombre: string) {
        this._nombre = nombre; 
    } 
    
    public get apellidos(): string{
        return this._apellidos; 
    }

    public set apellidos(apellidos: string){
        this._apellidos = apellidos;
    }   

    public get DNI(): string{
        return this._DNI; 
    }

    public set DNI(DNI: string){
        this._DNI = DNI;
    }

    public getEdad(): number{
        return this._edad; 
    }

    public setEdad() {

        let ahora: Date = new Date(); 

        this._edad = ahora.getFullYear() - this._cumple.getFullYear(); //Calculamos la edad con la fecha actual y la de nacimiento
    }

    public get cumple(): Date{
        return this._cumple;
    }

    public set cumple(cumple: Date){
        this._cumple = cumple; 
    }

    public get colorFavorito(): string{
        return this._colorFavorito; 
    }

    public set colorFavorito(colorFavorito: string){
        this._colorFavorito = colorFavorito; 
    } 

    public get sexo(): string{
        return this._sexo; 
    }

    public set sexo(sexo: string) {
        this._sexo = sexo; 
    } 

    public getNotas(): string[] {
        return this._notas;  
    } 

    public setNotas(notas: string) {

        for (let i of this._notas){ 
            if (i == "Sin notas"){ 
                this._notas.pop(); //Borramos el "Sin notas" que aparece por defecto antes de añadirle una nueva
            }
        }

        this._notas.push(notas); 
    }

    public get Direccion(): Direccion{
        return this._direccion;
    }

    public set Direccion (direccion: Direccion) {
        this._direccion = direccion; 
    }

    public get telefono(): Telefono {
        return this._telefono;
    }

    public set telefono(telefono: Telefono) {
        this._telefono = telefono;
    }

    public get mail(): Mail {
        return this._mail;
    }

    public set mail(mail: Mail) {
        this._mail = mail;
    }

    public toString(): string{
        
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

var direcNoe = new Direccion ("Calle Carretero", "17", "1", "A", "41100", "Coria del Río");
var telefNoe = new Telefono ("Empresa", "954444123");
var mailNoe = new Mail("Empresa", "noedaw@gmail.com");

var noe = new Persona ("Noelia", "Rodríguez García", "77882420A", new Date(1996, 3, 13), "Azul", "Mujer", direcNoe, telefNoe, mailNoe); 

noe.setNotas("Reunión a las 10:00"); 
noe.setNotas("Pagar cena");

var direcIrene = new Direccion ("Calle Pintor Zuolaga", "2", "2", "B", "11010", "Cádiz");
var telefIrene = new Telefono ("Personal", "666443123");
var mailIrene = new Mail("Persona", "irenecadiz@gmail.com");

var irene = new Persona ("Irene", "Martín Jiménez", "67223149B", new Date(2001, 2, 9), "Amarillo", "Mujer", direcIrene, telefIrene, mailIrene);  

irene.setNotas("Mandar código typescript");
irene.setNotas("Perdí el correo");

var direcDani = new Direccion ("Calle Almendralejo", "1", "4", "C", "41020", "Sevilla");
var telefDani = new Telefono ("Personal", "612333123");
var mailDani = new Mail("Empresa", "dani@samsung.com");

var dani = new Persona ("Daniel", "Sánchez Gómez", "12349523C", new Date(1998, 12, 5), "Negro", "Hombre", direcDani, telefDani, mailDani); 

//Metemos los 3 contactos en un array que vamos a necesitar más adelante y así lo aprovechamos para mostrar por pantalla.
const contactos: Array <Persona> = new Array<Persona>(noe, irene, dani);

//He creado una función para mostrar por pantalla el array porque tenemos que usarlo varias veces. 
mostrarConsola();

//Ahora vamos a modificar la dirección, el mail y el teléfono del registro de la persona con DNI 12349523C. Creamos 3 datos nuevos

var nuevaDireccion = new Direccion("Avenida de Eduardo Dato", "2", "5", "B", "41005", "Sevilla");
var nuevoTelefono = new Telefono ("Empresa", "955431233");
var nuevoMail = new Mail ("Personal", "dani03@gmail.com");

//Con el método .find encontramos qué contacto tiene ese DNI (de los que hay en el array contactos)

const modificar: Persona = contactos.find(contacto => contacto.DNI === "12349523C") as Persona;

//Asignamos los nuevos datos
modificar.Direccion = nuevaDireccion;
modificar.telefono = nuevoTelefono;
modificar.mail = nuevoMail;

//Mostramos por consola con los cambios
console.log("CONTACTOS ACTUALIZADOS:");
mostrarConsola();

function mostrarConsola () {
    for (let contacto of contactos){
        console.log(contacto.toString());
    }
}












