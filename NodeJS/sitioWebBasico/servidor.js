let http = require('http');
let fs = require('fs');

http.createServer( function (peticion, respuesta) {
    respuesta.writeHead(200,{'Content-Type':'text/html'}); 
    
    switch (peticion.url) {
        case '/': 
            plantilla = "inicio.html"
            break;
        case '/nodejs':
            plantilla = 'sobrenode.html';
            break;
        default:
            plantilla = '404.html';
            break;
    }
    fs.readFile("./plantillas/"+plantilla, function(error,datos) {
        respuesta.write(datos);
        respuesta.end();
    });
     

    //respuesta.write('Hola Mundo modificado');
    //respuesta.end();
}).listen(3000,'localhost');

console.log('El servidor se muestra en: http://localhost:3000');

//Hay un programa llamado nodemon, el cual permite recargar el servidor automáticamente
/*
Para instalar se ejecuta en consola con privilegios de administrador:
npm -install -g nodemon

Ejecutarlo: en lugar de utilizar "node nombrearchivo.js" escribir lo siguiente:
nodemon nombrearchivo.js
*/