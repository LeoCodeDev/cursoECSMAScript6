//Operador de Repposo --> extrae las caracteristicas de un objeto que aun no se ha construido

const obj = {
    name: 'Leo',
    age: 34,
    country: 'VE'
};

let { name, ...all} = obj;
console.log(name, all);

// Propiedades de Propagacion

const obj1 = {
    name: 'Leo',
    age: 34,
    country: 'VE'
};

const obj2 = {
    ...obj1,
    country: 'VE'
};

console.log(obj2);

//Promise.Finally

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 5000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//Mejoras sobre Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);