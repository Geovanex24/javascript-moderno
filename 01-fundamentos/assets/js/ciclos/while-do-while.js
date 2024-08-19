/**
 * << While - Do While >>
 *
 * Tenemos una lista de carros y queremos imprimir en consola, o bien,
 * procesar cada uno de los nombres de las marcas de carros de manera individual.
 *
 */

const carros = ["Ford", "Mazda", "Honda", "Toyota"];

/** << While >> */

let i = 0;

// while( i < carros.length) {
//     console.log(`La marca del carro es ${carros[i]}`);
//     i++;
// }

console.warn("While");
/** Podríamos ejecutar este ciclo while con diferentes condiciones
 *
 * Tip: La condición tiene que ser verdadera para que se ejecute. Si el valor de la condición es falso, esta se detiene
 *
 * Valores o condiciones falsas:
 * - undefined
 * - null
 * - 0
 * -  "" (vacio)
 * - false
 */
// console.log(carros[10]); // undefined
while (carros[i]) {
  if (i === 1) {
    // break;
    i++;
    continue;
  }
  console.log(`La marca del carro es ${carros[i]}`);
  i++;
} // código más limpio

/** << Do while >> */

console.warn("Do While");
/** Son practicamente lo mismo. Lo que puedo ejecutar en un while lo puedo hacer un do-while
 * La diferencia recae en que el do-while por lo menos va a ejecutar el bolque interno un vez.
 */
let j = 0;
do {
  console.log(`La marca del carro es ${carros[j]}`);
  j++;
} while (carros[j]); // Ejecuta al menos una vez y luego sigue la condición
