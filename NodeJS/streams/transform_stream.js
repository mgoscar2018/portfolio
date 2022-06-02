const fs = require('fs');
const {Transform} = require('stream');

const streamLectura = fs.createReadStream('fuente.txt');
const streamEscritura = fs.createWriteStream('destino2.txt');

streamLectura.setEncoding('utf8');

const filtro = new Transform ({
    writableObjectMode: true,
    transform(data, encoding, callback) {
        this.push(data.toString().toUpperCase());
        callback();
    },
    final(callback) {
        callback(); 
    }
})

streamLectura.pipe(filtro).pipe(streamEscritura);