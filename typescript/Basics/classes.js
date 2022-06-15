"use strict";
/* Clases */
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    /* Método estático */
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Oscar"); //Objetos
console.log(persona1);
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
let usr1 = { nombreUsuario: "Oscar", password: "1234" }; //cumple con los elementos obligatorios del contrato
let usr2 = { nombreUsuario: "Miranda", password: "5678", confirmarUsr: "5678" };
console.log(usr1);
console.log(usr1.nombreUsuario);
console.log(usr2);
let avion = {
    abordarTransporte: function () {
        console.log("Abordando...");
    }
};
avion.abordarTransporte();
// GENERICS
let arregloNumeros;
arregloNumeros = [1, 2, 3, 4];
//arregloNumeros = ["Oscar",1,2,3]; //ERROR: No se puede combinar tipos
let arregloNum = [2, 3, 5, 7];
console.log(arregloNumeros);
console.log(arregloNumeros[1]);
console.log(arregloNum);
