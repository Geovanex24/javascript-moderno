/** Por valor */
let a = 10;
let b = a;

a = 30;

// console.log({ a, b });

/** Por referencia */

// let juan = { nombre: "Juan" };
// let ana = juan;
// ana.nombre = "Ana";

// console.log({ juan, ana }); // { "juan": { "nombre": "Ana" }, "ana": { "nombre": "Ana"}}

/** Raro ¿no?
 *
 * Por qué pasa esto...?
 *
 * En javascript, todos los objetos son pasados por referencia
 *
 * Nota: Recordar que… todos los primitivos se pasan por valor y todos los objetos son pasados por referencia.
 *
 */

// const cambiarNombre = (persona) => {
//   persona.nombre = "Tony";
//   return persona;
// };

// let peter = { nombre: "Peter" };
// let tony = cambiarNombre(peter);

//console.log({ peter, tony }); //{ "peter": { "nombre": "Tony" } "tony": { "nombre": "Tony" } }

/** <<<< FORMAS DE ROMPER LA REFERENCIA >>>>
 *
 * Escenario #1
 * Crear una copia independiente del objeto, mediante el "spread operator" (...)
 *
 */

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana }); // { "juan": { "nombre": "Juan" }, "ana": { "nombre": "Ana" } }

/** <<<< FORMAS DE ROMPER LA REFERENCIA >>>>
 *
 * Escenario #2
 *
 */

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony }); // { "peter": { "nombre": "Peter" }, "tony": [ { "nombre": "Peter" } ] }

//  Arreglos
const frutas = ["Manzana", "Pera", "Piña"];
// const otrasFrutas = [...frutas];

/** El slice(), corta el arreglo y regresa los elementos que se especifiquen. Pero sino se indica ningun argumento,
 * regresa un nuevo arreglo rompiendo la referencia
 */
console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
