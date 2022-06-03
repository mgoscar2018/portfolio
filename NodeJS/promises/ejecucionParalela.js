function mensajesPrivados() {  // simula proceso que dura segundo y medio
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("mensajes"); //devuelve un texto
        }, 1500);
    });
}

function galeriaFotos() {  // simula proceso que dura segundo y medio
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("fotos"); //devuelve un texto
        }, 1500);
    });
}

function ultimasTransacciones() {  // simula proceso que dura segundo y medio
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("transacciones"); //devuelve un texto
        }, 1500);
    });
}

Promise.all( [mensajesPrivados(),galeriaFotos(),ultimasTransacciones()] )
    .then( (valores)=>{ //Esto se ejecuta hasta que todas las promesas del arreglo concluyeron
        console.log(valores);
    })