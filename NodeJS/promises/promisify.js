const fs = require('fs');
const util = require('util');

fs.writeFile('','Contenido a grabar en el archivo',()=>{ //Función con error
// fs.writeFile('arch.txt','Contenido a grabar en el archivo',()=>{ //función correcta
    //función callback que se ejecuta siempre que termina el proceso (bien o mal)
    //si se modifica la función por algo con error, de esta manera no hay forma de cazarlo
    console.log('Ejecución de función callback');
});

//promisify convierte a "promesas" cualquier función que trabaje con "callbacks"
const escribeConPromesa = util.promisify(fs.writeFile);
escribeConPromesa('','Contenido a grabar en el archivo') //con error
//escribeConPromesa('arch.txt','Contenido a grabar en el archivo') //correcta
    .then(()=>{
        console.log('Ejecución correcta');
    })
    .catch(()=>{
        console.log('Ejecución con error');
    })