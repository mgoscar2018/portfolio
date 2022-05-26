let saludo = "Hola con TypeScript";
//saludo = 123; // ERROR: en TypeScript una vez inicializado con un tipo, no puede ser cambiado por otro diferente.
saludo = "Hola de nuevo, esto si es correcto!" 

// let numero:Number = "asads"; //ERROR: por diferencia de tipos
let numero:Number = 123;

let cualquiera:any = 345; //con el tipo "Any" permite declararse con cualquier tipo
cualquiera = "El tipo ANY permite modificar con cualquier otro tipo diferente al declarado inicialmente.";

const PI = 3.1416;
//PI =3.14; //ERROR: Una vez declarado como constante, no puede ser modificado por otro valor

function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
}

saludar();