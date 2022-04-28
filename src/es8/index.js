/*Objet.Entries, Objet.values, padding, Trailing commas, Async, Await */

//Objet.entries ---> transforma los elementos en arrays

const data = {
    fronted: 'Claudio',
    backend: 'Leopoldo',
    desing: 'Vericar',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Objet.values ---> toma los valores y los convierte en un array ignorando las asignaciones
//Trailing commas

const data = {
    fronted: 'Claudio',
    backend: 'Leopoldo',
    desing: 'Vericar',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

//Async y Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
           ? setTimeout(() => resolve('Hello World'), 3000)
           : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();