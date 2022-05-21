/*
Basic Example to show how classes and objects work
*/

class DispositivoEntrada {
    constructor(tipo,marca) {
        this._tipo = tipo;
        this._marca = marca;
    }

    get tipo() { return this._tipo; }
    set tipo(tipo) { this._tipo =tipo; }

    get marca() { return this._marca; }
    set marca(marca) { this._marca = marca; }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor (tipo,marca) {
        super(tipo,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    
    get idRaton() { return this._idRaton; }

    toString() {
        return `Raton: [idRaton:${this._idRaton}, tipo:${this._tipo}, marca:${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor (tipo, marca) {
        super(tipo, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() { return this._idTeclado; }

    toString() {
        return `Teclado: [idTeclado:${this._idTeclado}, tipo:${this._tipo}, marca:${this._marca}]`;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor (marca, tamanio) {
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get marca() { return this._marca; }
    set marca(marca) { this._marca = marca; }

    get tamanio() { return this._tamanio; }
    set tamanio(tamanio) { this._tamanio = tamanio; }

    get idMonitor() { return this._idMonitor; }

    toString() {
        return `Monitor: [idMonitor:${this._idMonitor}, Marca:${this._marca}, Tamaño:${this._tamanio}]`;
    }
}    

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, Monitor, Teclado, Raton) {
        this._nombre = nombre;
        this._Monitor = Monitor;
        this._Teclado = Teclado;
        this._Raton = Raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }

    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }

    get Monitor() { return this._Monitor; }
    set Monitor(Monitor) { this._Monitor = Monitor; }

    get Teclado() { return this._Teclado; }
    set Teclado(Teclado) { this._Teclado = Teclado; }

    get Raton() { return this._Raton; }
    set Raton(Raton) { this._Raton = Raton; }

    get idComputadora() { return this._idComputadora; }

    toString() {
        //return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this.Monitor.toString()} \n ${this.Raton.toString()} \n ${this.Teclado.toString()}`;
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._Monitor} \n ${this._Raton} \n ${this._Teclado}`; //Es igual que la línea de arriba
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor(){ 
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];        
    }

    get idOrden() { return this._idOrden; }

    agregarComputadora(Computadora) {
        this._computadoras.push(Computadora);
    }

    mostrarOrden() {
        let compuOrden = '';
        for (let computadora of this._computadoras) {
            compuOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${compuOrden}`);
    }
}

let raton1 = new Raton('USB','acer');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','dell');
console.log(raton2.toString());
raton2.marca = 'HP';
console.log(raton2.toString());

let teclado1 = new Teclado('gamer','ocelot');
console.log(teclado1.toString());
let teclado2 = new Teclado('USB','HP');
console.log(teclado2.toString());

let monitor1 = new Monitor('dell','20"');
console.log(monitor1.toString());
let monitor2 = new Monitor('HP','30"');
console.log(monitor2.toString());

let computadora1 = new Computadora('PCoscar',monitor1,teclado1,raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora('HP',monitor2,teclado2,raton2);
console.log(`${computadora2}`); //Es la misma salida que toString() pero con "Template String"

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
