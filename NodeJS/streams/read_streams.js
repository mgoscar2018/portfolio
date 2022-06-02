const fs = require('fs');

const streamLectura = fs.createReadStream('archivo.txt',{encoding:'utf8'});

streamLectura.on ("open", ()=>{
    console.log('Abriendo archivo');
}).on("data",()=>{
    console.log("---");
}).on("close",()=>{
    console.log('Archivo cerrado');
}).on("error",()=>{
    console.log('Error en el archivo');
})

