let http = require('http');

http.createServer( function (peticion, respuesta) {
    //https://developer.mozilla.org/es/docs/Web/HTTP/Status 
    //En el link anterior se encuentran los códigos de estado de respuesta HTTP
    //https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types (lista completa)
    //En caso de requerir conocer que tipo de "Content-Type" usar
    respuesta.writeHead(200,{'Content-Type':'text/html'}); //código 200 significa que todo está bien. (404 es de una página con error)
    respuesta.write('<h1>Este es un servidor con lo m&iacute;nimo requerido</h1>');
    respuesta.end();
}).listen(3000,'localhost');

console.log('El servidor se muestra en: http://localhost:3000');

//Hay un programa llamado nodemon, el cual permite recargar el servidor automáticamente
/*
Para instalar se ejecuta en consola con privilegios de administrador:
npm -install -g nodemon

Ejecutarlo: en lugar de utilizar "node nombrearchivo.js" escribir lo siguiente:
nodemon nombrearchivo.js
*/