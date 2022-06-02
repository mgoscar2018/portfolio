const fs = require('fs');
const {Duplex} = require('stream');

const streamLectura = fs.createReadStream('mi_archivo.txt');
const streamEscritura = fs.createWriteStream('destino.txt');

const reporte = new Duplex ({
    write(data, encode, callback) {
        console.log(data);
        callback();
    },
    read(size) {}
});

streamLectura.pipe(reporte).pipe(streamEscritura);

//DUDAS... ¿para que sirve? ¡no grabó nada en el archivo destino!
