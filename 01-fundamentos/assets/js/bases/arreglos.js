/** -- Arreglos --
 *
 * Los arrays son un conjunto de datos ordenados o listas de información por posiciones, asociados en una sola variable.
 * Los datos pueden ser de cualquier tipo de dato. Su posición inicia en 0.
 *
 */

/** Formas de declarar o crear un arreglo */

// const arr = new Array(10); //menos común
// console.log(arr);

// const arr = [];
// cono;

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];

console.log({ videoJuegos });
console.log(videoJuegos[0]); //Acceder al valor de una posición

let arregloCosas = [
  true,
  123,
  "Geovanni",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

// console.log({ arregloCosas });
// console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[6].a);
console.log(arregloCosas[7][4][1]);
