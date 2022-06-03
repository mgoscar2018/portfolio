const fs = require('fs');
const EventEmitter = require('events');

//const streamLectura = fs.createReadStream('mi_archivo.txt');
const streamEscritura = fs.createWriteStream('nuevoArchivo.txt');

/*Creando un evento personalizado */
class Emisor extends EventEmitter {}
const miEmisor = new Emisor();

function escribirEnArchivo() {
    let iteraciones = 5;
    for (let i=0; i<iteraciones; i++) {
        streamEscritura.write(`Iteración #${i}\n`);
    }
    streamEscritura.write('=========== FIN ===========');
    streamEscritura.end();
}

function notificarPorCorreo() {
    console.log("Preparando correo");
    setTimeout(() => {
        miEmisor.emit('correoOK'); //emite o genera un evento
    }, 1000);
}

function leerDocumento() {
    fs.readFile('nuevoArchivo.txt',(error,documento)=>{
        console.log(documento.toString());
    });
}

streamEscritura.on('close',()=>{
    notificarPorCorreo();
});

miEmisor.on('correoOK',()=>{ //Uso de evento personalizado
    leerDocumento();
});

escribirEnArchivo();