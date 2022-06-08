// Object Oriented Programming (OOP) concepts

/*
Classes 
    Are user-defined data types that act as the blueprint for individual objects, attributes and methods.
*/
class Empleado{
    constructor(nombre, sueldo){
        /*Attributes 
            Are defined in the class template and represent the state of an object. Objects will have data 
            stored in the attributes field. Class attributes belong to the class itself.
        */
        this._nombre = nombre;  //Atributos
        this._sueldo = sueldo;
    }
/*
Methods 
    Are functions that are defined inside a class that describe the behaviors of an object. Each method 
    contained in class definitions starts with a reference to an instance object. Additionally, the 
    subroutines contained in an object are called instance methods. Programmers use methods for reusability 
    or keeping functionality encapsulated inside one object at a time.
*/
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }

    get sueldo() { return this._sueldo; }
    set sueldo(sueldo) { return this._sueldo; }
}

/*
Inheritance. 
    Classes can reuse code from other classes. Relationships and subclasses between objects can be assigned, 
    enabling developers to reuse common logic while still maintaining a unique hierarchy. This property of OOP 
    forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.
*/
class Gerente extends Empleado{ // Herencia
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    
    obtenerDetalles(){ //Sobreescritura (overriding)
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }

    get departamento() { return this._departamento; }
    set departamento(departamento) { this._departamento = departamento; }
}

/*
Objects 
    Are instances of a class created with specifically defined data. Objects can correspond to real-world 
    objects or an abstract entity. When class is defined initially, the description is the only object that 
    is defined.
*/
let empleado1 = new Empleado('Juan', 3000); //Objetos
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

console.log( empleado1.obtenerDetalles() );
console.log( gerente1.obtenerDetalles() );

/* 
Polymorphism. 
    Objects are designed to share behaviors and they can take on more than one form. The program will 
    determine which meaning or usage is necessary for each execution of that object from a parent class, 
    reducing the need to duplicate code. A child class is then created, which extends the functionality 
    of the parent class. Polymorphism allows different types of objects to pass through the same interface.
*/
function imprimir(tipo) { //Polimorfismo, 
    console.log(tipo.obtenerDetalles()); //un mismo metodo que sirve para obtener detalles de un objeto Empleado o Gerente
}

imprimir(gerente1);
imprimir(empleado1);


/*
 =========   basic principles of OOP  =========
 1) Encapsulation.- Encapsulation is achieved when each object keeps its state private, inside a class. 
    Other objects don’t have direct access to this state. Instead, they can only call a list of public functions.
 2) Abstraction.- This mechanism should hide internal implementation details. It should only reveal operations 
    relevant for the other objects. Abstraction can be thought of as a natural extension of encapsulation.
 3) Inheritance (Herencia) .- It is the ability to acquire the properties of existing classes and 
    create new ones. Inheritance allows you to reuse code without having to rewrite it in a program.
 4) Polymorphism (Polimorfismo).- It is the ability of one function to perform in different ways. 
    It can be applied in two simple ways:
    4.1 Overloading - A class with multiple methods with the same names but a different set of parameters, 
        or different return types, or different access modifiers.
    4.2 Override: This is only possible if a subclass (or) sister class has the same method as the parent class, 
        has the same parameter list, same return type, and only has different behavior.

 Object.-
 Class.- A class is like a template from which new objects are created.

 https://www.sanfoundry.com/object-oriented-programming-questions-answers-constructors-overloading/
*/