
// Arrays
// Declarando um array
/* let array = ['String', 1, true];
console.log(array); */

// pode guardar vários tipos de dados
let array = ['Maycon',2, true, ['array1'],['array2'],['array3'],['array4']];
/*console.log(array[3]);*/ //mostrar posição.

// forEach() - intera um array
/* array.forEach(function (item, index){console.log(item, index)}); */

// push() - add item no final do array
/* array.push([]);
console.log(array); */

// pop() - remove item no final do array
/* array.pop();
console.log(array); */

// shift() remove item no início do array.
/* array.shift(); 
console.log(array); */

// unshift() - add item no início do array.
/* array.unshift('novo item no inicio');
console.log(array); */

// retorna o índice de um valor.
/* console.log(array.indexOf(true)); */

// remove ou substitui um item pelo índice.
/* array.splice(0, 3);
console.log(array); */


// pegar os 3 primeiros indices.
/* ler novoArray = array.slice(0, 3);
console.log(novoArray); */

// Objetos:

let object = {string: 'String', number: 1, boolean: true, array: ['array'], objectInteiro: 'objeto interno'}

console.log(object);

// console.log(objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);
