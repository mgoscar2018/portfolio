//let myPromise = new Promise( (resolve, reject)=> {});  //Basic promise structure
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver ('Funcionó Correcto');
    else 
        rechazar ('Se produjo ERROR');
});
miPromesa.then ( valor=>console.log(valor), error=>console.log(error));
miPromesa.then (valor=>console.log(valor)).catch(error=>console.log(error)); //same to line 10

// Promise + Timeout
let miPromesa2 = new Promise((resolve) => {
    setTimeout(()=> resolve('Hi from a promise with a Time Out of 3 seconds'),3000);
});
miPromesa2.then(valor=>console.log(valor));

// Async let a normal function return a promise
async function mifuncion() {
    return 'Hi from a normal function with async returning a promise';
} 
mifuncion().then((valor)=>console.log(valor));

// Asycn with promise and await
async function mifuncion2() {
    let promesa = new Promise( (resolve) => {
        resolve ('Promise with await');
    });
    console.log(await promesa); //await only can we use it inside of the async function
}
mifuncion2();

// async, await, promise and timeout
async function miFuncion3() {
    console.log('starting miFuncion3');
    let promesa = new Promise( (resolve)=>{
        setTimeout(()=>resolve('Promise with await and timeout'),3000);
    });
    console.log(await promesa);
    console.log('finishing miFuncion3');
}
miFuncion3();
