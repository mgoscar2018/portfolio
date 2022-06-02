const fs = require('fs');

const archivo = fs.createWriteStream('archivo.txt')

for (let i=0; i<1e6; i++) { //de 0 a 1 millón para crear un archivo de texto superior a los 200MB
    archivo.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum cupiditate iste totam optio nobis, illo adipisci dicta quasi temporibus, voluptas, consectetur repellat blanditiis cumque quas ex aliquam consequuntur ipsum.');   
}

archivo.end();
