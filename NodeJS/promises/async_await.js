/* Función normal
function numeroAleatorio() {
    console.log(Math.floor(Math.random()*100)); // Devuelve un número aleatorio del 1 al 100
}
*/

//Función como promesa
function numeroAleatorio() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => { //Simulamos que tarda el proceso 2 segundos
            resolve(Math.floor(Math.random()*100)); // Devuelve un número aleatorio del 1 al 100
        }, 2000); 
    })
}

async function resultado() { //si no utilizamos "async y await" se ejecuta la función y no se espera a que devuelva el resultado la promesa
    console.log('Resultado invocado');
    const aleatorio= await numeroAleatorio(); //sin el "await" devuelve [object Promise], con el await devuelve el número aleatorio
    console.log(`Resultado: ${aleatorio}`);
}

resultado();