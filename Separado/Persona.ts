import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {

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