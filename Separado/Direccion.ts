export class Direccion{
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