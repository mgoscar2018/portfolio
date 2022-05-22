
function imprimir (mensaje) { //normal function
    console.log(mensaje);
}

function sumar (op1, op2, callbackF) { //receive a function as a parameter (call back function)
    let total = op1 + op2;
    callbackF(`Total=${total}`);
}

sumar(4,9,imprimir); // send a function as a parameter

// Using setTimeOut 
function myCallBackFunction() {
    console.log('Hi from asynchronous call back function!');
}

setTimeout(myCallBackFunction,3000); //run myCallBackFunction after 3 seconds
setTimeout(function () { console.log('Asynchronous call back function 2')},4000);
setTimeout(()=>console.log('Asynchronous call back arrow function 3'),1000);

// Using setInterval
let swatch = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(swatch,1000); //Run swatch function every 1 second