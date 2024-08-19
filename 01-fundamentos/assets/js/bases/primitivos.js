/** introducción a los tipos de datos primitivos
 *
 * - Strings
 * - Number
 * - Boolean
 * - Null
 * - Undefined
 * - Symbol
 */

// strings
let nombre = "Peter Parker"; // string
console.log(nombre);

nombre = "Ben Parker";
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log(typeof nombre);

// boolean
let esMarvel = true;
console.log(typeof esMarvel);

// numeros
let edad = 25; // number
console.log(edad);

// undefined
let superPoder;
console.log(superPoder); // ??? = undefined

// null
let soyNull = null;
console.log(typeof soyNull); // retorna object, pero no lo es! En JS todo es un objeto, excepto los primitivos

// symbol
let symbol1 = Symbol("a"); // Para identificar propiedades de manera única.
let symbol2 = Symbol("a");
console.log(typeof symbol1);

console.log(symbol1 === symbol2);
