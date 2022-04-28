/* metodo flat, flatMap, trimStart, trimEnd, optional catch binding, fromEntries, objeto tipo simbolo */

//flat
let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2));

//flatMap
let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));

//trimStart and trimEnd

let hello = '      hello World'

console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world      '
console.log(hello1);
console.log(hello1.trimEnd());

//Optional Catch Binding

try {

}catch {
    error
}

//fromEntries

let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries));

//Objeto tipo simbolo

let mySymbol = 'my symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);