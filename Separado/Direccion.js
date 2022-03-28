export class Direccion {
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
