const fs = require('fs');

const streamLectura = fs.createReadStream("mi_archivo.txt");
const streamEscritura = fs.createWriteStream('copia_mi_archivo.txt');

streamLectura.pipe(streamEscritura);

// Opcionalmente podemos verificar el proceso y mostrar un mensaje cuando termine el copiado
streamLectura.on("end", ()=>{
    console.log('Proceso Finalizado');
});