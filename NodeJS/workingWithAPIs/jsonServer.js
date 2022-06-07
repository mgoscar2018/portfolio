const http = require('http');
const PORT = 3001;

let notes = [
    {
        "id": 1,
        "content": 'Creación de este código',
        "date": '7 de Junio del 2022',
        "important": false
    },
    {
        "id": 2,
        "content": 'Fecha de Nacimiento',
        "date": '24 de Mayo del 1979',
        "important": false
    },
    {
        "id": 3,
        "content": 'Nacimiento Elisa Valentina',
        "date": '25 de Agosto del 2011',
        "important": true
    }

]

// Creating server 
http.createServer( (peticion, respuesta)=>{
    respuesta.writeHead(200,{'Content-Type':'application/json'});  //se trabaja con tipo JSON
    //respuesta.write(notes); //manda error
    //respuesta.write(notes.toString()); //devuelve: [object Object],[object Object],[object Object]
    respuesta.write(JSON.stringify(notes)); //manda error
    respuesta.end();

}).listen(PORT);

console.log(`Server running on port ${PORT}`);