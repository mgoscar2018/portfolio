const promesasNode = require('fs').promises;

promesasNode.copyFile('original.txt','copia.txt')
            .then(()=>console.log('Copia terminada')) //Se ejecuta si finaliza correctamente la promesa
            .catch(()=>console.log('No se pudo copiar el archivo')) //Se ejecuta en caso de error en la promesa
            .finally(()=>console.log('Esto se ejecuta siempre')) //Se ejecuta en todos los casos
