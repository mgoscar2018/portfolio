const https = require('https');

const req = https.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res)=>{
    res.on('data',(data)=>{ //escuchar cada vez que se recibe un bloque de datos
        console.log('...recibiendo datos');
    });
    res.on('end',(data)=>{ //se activa cada vez que se recibe un bloque de datos
        console.log('llegó el último paquete de datos... termina http');
    });
    //console.log('Datos recibidos de wikipedia OK');
});

// "on" permite asignar código que se va a ejecutar cuando se activa el evento
req.on("socket", (data)=>{
    console.log('Inicia http');
});

req.on("error", (data)=>{
    console.log('ERROR');
});  