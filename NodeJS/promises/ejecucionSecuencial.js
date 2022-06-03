
function login() {  // simula un acceso que dura segundo y medio
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

function datosUsuario() {  // simula devolución de datos que dura segundo y medio
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}

login().then (()=>{
    console.log('Usuario autenticado');
    return datosUsuario();
}).then (()=>{
    console.log('Datos de usuario OK');
}).catch (()=>{
    console.log('Ocurrio ERROR');
})