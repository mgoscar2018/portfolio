/* Cambio de valor por referencia */
const dessert = {type: 'pie'};
dessert.type = 'pudding';

const seconds = dessert; // seconds apunta a dessert
seconds.type = 'fruit'; //por lo tanto cambia el valor en dessert

console.log(dessert.type);

//-------------------------------------------------------
let rainforest = ["Amazon", "Borneo", "Cerrado", "Congo"];
rainforest.splice(0,2); //Remueve 2 elementos empezando en la posición 0
console.log(rainforest);

//-------------------------------------------------------
class Animal {
    static belly = [];
    eat() {Animal.belly.push("food");}
}
let a = new Animal();
a.eat();
//Al ser estático sólo puede ser accesado desde la clase "Animal"
console.log(Animal.belly[0]);

//-------------------------------------------------------
let rforest = 10;
let animals = 0;

while (rforest<13 || animals<=2) {
    console.log(rforest++);
    console.log(animals += 2);
}
console.log(animals);

//-------------------------------------------------------
// Comportamiento del POP
var p = ["1","2","3","4"];
p.pop(); // saca 4
console.log(p.pop()); //saca 3

//-------------------------------------------------------
/*  El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
    devolviendo como resultado un único valor 
*/
let scores = [];
scores.push(1,2);
console.log(scores);
scores.pop();
console.log(scores);
scores.push(3,4);
console.log(scores);
scores.pop();
console.log(scores);
scores = scores.reduce((a,b) => a+b); //Suma todos los valores de un array
console.log(scores); //resultado 4


//-------------------------------------------------------
// Comportamiento del copiado de arreglos con tres puntos "..."
const x = [1,2];
const y = [3,4];
const z = [...x,...y];
console.log(z);

//Comportamiento al copiar objetos con los tres puntos "..."
const obj = {
    a:1,
    b:2,
    c:3,
};
const obj2 = {
    ...obj,
    b:5,
};

console.log(obj);
console.log(obj2);
console.log(obj.a, obj2.b)

//-------------------------------------------------------
// Comportamiento de los arreglos;
var mArreglo = ["1","2"]; 
console.log(mArreglo.length); //Tamaño 2
mArreglo[100] = 'a'; // Se agrega un elemento en la posición 100 (recordar que inicia con 0)
console.log(mArreglo.length); //Por lo tanto el tamaño total es 101

//-------------------------------------------------------
// Comparaciones

console.log(Boolean("False")); 
console.log(Boolean(""));
console.log(Boolean(2));
console.log(Boolean(0));
console.log(Boolean([0]));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(3=='3');
console.log(3==='3');
console.log([3]===[3]);

const a1 = [1,2];
const a2 = [1,2];
const a3 = "1,2";
console.log(a1==a2);
console.log(a1===a2);
console.log(a1===a3);
console.log(a1==a3);
console.log(JSON.stringify(a1) === JSON.stringify(a2));
console.log(JSON.stringify(a1) === JSON.stringify(a3));

const m = {x:1};
const n = {x:1};
console.log(m==n);
console.log(m===n);
console.log(m.x===n.x);

console.log(null == undefined);
console.log(null === undefined);
console.log(0 == undefined);
console.log(0 == "");

console.log('100' > '2'); //falso porqué está comparando cadenas y no números
console.log('2' > '100');
console.log(1>'letra');
console.log(1<'letra');

// Más ejemplos en: https://learntutorials.net/es/javascript/topic/208/operaciones-de-comparacion

//-------------------------------------------------------
// Operador condicional (ternario)
const xa= 6%2;
console.log(xa); //0 = false
const ya = xa ?'One':'Two'; //condición ? expr1(true) : expr2(false)
console.log(ya);

//-------------------------------------------------------
const myFunc = () => {
    const val = 2;
    return ()=>console.log(val); //Está retornando una función, no la impresión del valor
    //return 'OSCAR';
}

const val = 3;
myFunc(); //No imprime nada

//-------------------------------------------------------
vocal = "aeiou";
for (let i=0; i<vocal.length; i++) {
    console.log(vocal[i]);
}


//-------------------------------------------------------
console.log(typeof("42"));
console.log(typeof(42.1));

//-------------------------------------------------------
//Comportamiento de función "reverse"
let arrY = [1,2,3,4];
console.log(arrY.reverse());

var s = "9123456 or 80000?";
var pattern = /\d{4}/;
console.log(s.match(pattern));

//-------------------------------------------------------
/*
let va1 = 2;
if (nada == va1) console.log(true); //ERROR de EJECUCIÓN por no estar declarado "nada"
else console.log(false);
*/
//-------------------------------------------------------
/* PREGUNTAS Y RESPUESTAS

1) Which method do you use to attach one dom node to another?

There are multiple methods available to add element to the DOM object.
--> appendchild()--> “Append” means add. This is to add new node to the last child of the parent.
--> insertbefore()--> Insert node to the element before the specified sibling node.
--> replacechild()-->  To replace the new node over the existing node.


2) In JavaScript, Window.prompt() method return true or false value ?
    FALSE

3) Which type of JavaScript language is __
    Object-Based

4) Which one of the following is also known as Conditional Expression?
    inmediate if

5) What does the <noscript> tag do?
    Enclose text to be displayed by non-JavaScript browsers

6) What are the two basic groups of datatypes in JavaScript?
    Reference types, Primitive

7) To set up the window to capture all Click events, we use which of the following statement?
    window.captureEvents(Event.CLICK);

8) What are the types of Pop up boxes available in JavaScript?
    Alert, Confirm

9) What event do you use to perform something after the page has finished loading?
    onload

10) How to detect the name of the client’s browser?
    navigator.appName   
*/