export class Mail {
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