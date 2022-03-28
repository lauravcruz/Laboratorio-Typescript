export class Persona {
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
