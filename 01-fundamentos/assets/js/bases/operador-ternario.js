/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 *
 * Nota: Aunque no es una regla estricta que el día domingo sea representado como 0, tenemos la flexibilidad de asignarle otro valor, como por ejemplo, 7.
 * No obstante, se fomenta o sugiere que, dado que ya existe un estándar u objeto en JavaScript que establece que el domingo es "0" (un valor que no podemos modificar),
 * resulta conveniente trabajar en base a estos objetos predefinidos en JS.
 */

//Entra en un sitio web, para consultar si está abierto hoy...

const dia = 1; // 0: domingo, 1: Lunes....
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("Fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Día de semana");
//   horaApertura = 11;
// }
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Está abierto";
// } else {
//   mensaje = `Esta cerrado, hoy abrimos  a las ${horaApertura}:00 horas`;
// }

mensaje =
  horaActual >= horaApertura
    ? "Está abierto"
    : `Esta cerrado, hoy abrimos  a las ${horaApertura}:00 horas`;

console.log({ horaApertura, mensaje });
