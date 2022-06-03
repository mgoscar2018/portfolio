const fs = require('fs');
let http = require('http');

function leerArchivo() {
    //fs.readFileSync('../streams/archivo.txt','utf8');  //Esto es ineficiente hecho para demostrar el bloqueo (tarda 1.8 segundos)
    const streamLectura = fs.createReadStream('../streams/archivo.txt',{encoding:"utf8"}); // versión eficiente (tarda 11 milisegundos)

}

http.createServer(function(req,res) {
    for(let a=0; a<30; a++) {
        leerArchivo();
    }
    res.write('Hola despues de leer 30 veces un archivo');
    res.end();
}).listen(8080);  //abrir navegador http://localhost:8080