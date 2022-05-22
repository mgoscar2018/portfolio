// Normal Function assigned to constant
const myFunction = function () {
    console.log('Hi, from normal function!');
}

// Arrow Function
const myArrowFunction = ()=>{
    console.log('Hi from arrow function!');
}

const myArrowFunction2 = ()=> console.log("I'm an arrow function too!!"); // without curly brackets 
const myArrowFunction3 = ()=> 'Arrow function without explicitly return';
const arrowF3 = ()=>({name:'Oscar', age: 42}); //arrow function with object return
const arrowF4 = (parameter) => console.log(parameter); //arrow function with parameter
const arrowF5 = parameter => console.log(parameter); //without parenthesis, only for one parameter cases

myFunction();
myArrowFunction();
myArrowFunction2();
console.log(myArrowFunction3());
console.log(arrowF3());
arrowF4('Hi from arrow function 4!');
arrowF5('Arrow function 4 is simplified!');
