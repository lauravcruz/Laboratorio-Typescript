export class Mail {
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
