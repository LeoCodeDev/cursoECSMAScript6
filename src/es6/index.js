
// Parametros por defecto ES5
function newFuntion(name, age, country){
    var name = name       || 'Leo';
    var age = age         || 34;
    var country = country || 'VE';
    console.log(name, age, country)
;}

// Parametros por defecto en ES6
function newFunction2 (name = 'Leo', age = 34, country = 'VE'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Navid', 29, 'PE');

// Template Literals ES5

let hello = 'Hello';
let world = 'Wolrd';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Template Literals ES6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multi linea ES5

let lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime natus mollitia consequatur unde, omnis nulla. \n'
+ 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime natus mollitia consequatur unde, omnis nulla.'

// Multilinea en ES6

let lorem2 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime natus mollitia consequatur unde, omnis nulla.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime natus mollitia consequatur unde, omnis nulla.
`;
console.log(lorem);
console.log(lorem2);

// Destructurar Objetos ES5

let person = {
    'name': 'oscar',
    'age': 34,
    'country': 'VE'
}

console.log(person.name, person.age, person.country);

// Destructurar objetos ES6

let {name, age, country} = person

console.log(name, age);

//Operador de Propagacion ES6

let team1 = ['Leo', 'Navid', 'Vericar'];
let team2 = ['Samuel, Roro', 'Rixon'];

let education = ['Stephany', ...team1, ...team2];

console.log(education);

// declaradores var, let, const.

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';

console.log(a);

//Propiedad de Objetos mejorada

let name2 = 'leo';
let age2 = 34;
//ES5
obj = {name: name2, age: age2};
//ES6
obj2 = {name2, age2};

console.log(obj2);

/* Arrow Function */

//ES5
const names = [
    {nombre: 'Leo', edad: 34},
    {nombre: 'Vericar', edad: 29}
]

let listOfNames = names.map(function(item){
    console.log(item.nombre);
})

//ES6

let listOfNames2 = names.map(items => console.log(items.name));

const listOfNames3 = (nombre, edad) => {
    console.log(nombre, edad);
}

const listOfNames4 = nombre => {

}

const square = num => num * num;

//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (false) {
            resolve('Hey!');
        } else {
            reject ('Ups!!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//Clases

class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module'

hello();

//Generator
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);