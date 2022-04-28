/* Dinamic Import, BigInt, Promise.allSettled, globalThis, operado Nullo, Optional Chaining*/

//Dinamic import
const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./file.js');
    module.hello();
})

//BigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(
    aBigNumber,
    anotherBigNumber
)

//Promise.allSettled()

const prommisse = new Promise((resolve, reject) => reject('reject'));
const prommisse2 = new Promise((resolve, reject) => reject('resolve'));
const prommisse3 = new Promise((resolve, reject) => reject('resolve 1'));

Promise.allSettled([prommisse, prommisse2, prommisse3])
    .then(response => console.log(response))

//Global This

console.log(window);
console.log(globalThis);

//Operador Nulo

const fooo = 'null' ?? 'default string';
console.log(fooo)

//Optional Chaining

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log(email)
} else {
    console.log('fail')
}