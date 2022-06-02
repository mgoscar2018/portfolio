const fs = require('fs');

console.time("Tiempo de respuesta");
/* 
for (let i=0; i<10; i++) { //3.54 segundos tarda en leer todo el archivo 10 veces
    fs.readFileSync('archivo.txt','utf-8')
}
*/

for (let i=0; i<10; i++) { //1.99 milisegundos
 const streamFile = fs.createReadStream("archivo.txt", {encoding:"utf-8"});
} 

console.timeEnd("Tiempo de respuesta");