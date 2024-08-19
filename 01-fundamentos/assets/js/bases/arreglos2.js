/** Metodos de arrays */

let juegos = ["Zelda", "Mario", "Metroid", "Resident Evil"];
console.log("Longitud del arreglo", juegos.length); // propiedad length

// Obtener primera y última posición
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

/**
 *  |||||||||||||||||| Método: forEach() ||||||||||||||||||
 */

// juegos.forEach((elemento, indice, arr) => {
//   console.log(elemento, indice, arr);
// });
juegos.forEach((juego) => console.log(juego));

/**
 * |||||||||||||||||| Método: push() ||||||||||||||||||
 *
 * Añadir uno o más elementos en la última posición y retorna la nueva longitud del arreglo
 */

let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

/**
 * |||||||||||||||||| Método: unshift() ||||||||||||||||||
 *
 * Añadir uno o más elementos al inicio del arreglo, y retorna la nueva longitud del arreglo
 */
nuevaLongitud = juegos.unshift("Forza");
console.log({ nuevaLongitud, juegos });

/**
 * |||||||||||||||||| Método: pop() ||||||||||||||||||
 *
 * Elimina el último elemento del arreglo, y retorna el valor del elemento eliminado
 */
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

/**
 * |||||||||||||||||| Método: shift() ||||||||||||||||||
 *
 * Elimina el primer elemento del arreglo, y retorna el valor del elemento eliminado
 */
// juegoBorrado = juegos.pop();
// console.log({ juegoBorrado, juegos });

/**
 * |||||||||||||||||| Método: splice() ||||||||||||||||||
 *
 * Inserta, Borra o reemplaza un elemento en una posición específica. Retoran los elementos eliminados o reemplazados
 */

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf("Metroid"); //CaSeSensItIvE: js distingue entre mayusculas y minusculas. Si se escribe no lo encontrará
console.log({ metroidIndex });

//TODO: pasar valores por "Referencia" y por "valor"
