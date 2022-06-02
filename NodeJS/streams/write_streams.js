const fs = require('fs');

var contenido = "1234567890";
var iteraciones = 15;

for (let i=0; i<iteraciones; i++) {
    contenido += contenido;
}

fs.writeFile("mi_archivo2.txt", contenido, ()=>{ //Escritura de un archivo síncrona
    console.log('Escritura directa finalizada');
});

const streamEscritura = fs.createWriteStream('mi_archivo.txt'); //Escritura con streams
streamEscritura.write(contenido,()=>{
    console.log('Stream finalizado');
});

//NOTA: Al ejecutar el programa, se observará que primero termina la escritura con stream a pesar de haber iniciado primero la directa.

