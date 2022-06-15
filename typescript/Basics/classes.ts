/* Clases */
class Persona {
    private nombre:string; //Es obligatorio indicar el tipo
    constructor(nombre:string) {
        this.nombre = nombre;
    }

    getNombre():string {
        return this.nombre;
    }

    /* Método estático */
    static metodoEstatico():number {
        return 10;
    }
}

let persona1 = new Persona("Oscar"); //Objetos
console.log(persona1);
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());

// INTERFACE (Definir contrato)
interface Usuario {
    nombreUsuario:string;
    password:string;
    confirmarUsr?:string; //El signo de interrogación "?" indica que es opcional
}

let usr1:Usuario = {nombreUsuario:"Oscar", password:"1234"}; //cumple con los elementos obligatorios del contrato
let usr2:Usuario = {nombreUsuario:"Miranda", password:"5678", confirmarUsr:"5678"};
console.log(usr1);
console.log(usr1.nombreUsuario);
console.log(usr2);

// Interface con método
interface Abordar {
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function() {
        console.log("Abordando...");
    }
}

avion.abordarTransporte();

// GENERICS
let arregloNumeros: Array<number>;

arregloNumeros = [1,2,3,4];
//arregloNumeros = ["Oscar",1,2,3]; //ERROR: No se puede combinar tipos

let arregloNum:number[] = [2,3,5,7];

console.log(arregloNumeros);
console.log(arregloNumeros[1]);
console.log(arregloNum);
