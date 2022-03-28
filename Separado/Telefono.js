export class Telefono {
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
