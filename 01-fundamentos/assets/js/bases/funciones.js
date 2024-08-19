/** Funciones
 *
 * Una función se compone de una secuencia de declaraciones o bloque de código, que conforman el cuerpo de la función.
 *
 * Objetivo: Centralizar la lógica de un procedimiento, algoritmo, tarea, o método que podrá ser reutilizado las veces que se requiera. Un bloque de código reutilizable.
 *
 */

function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola " + nombre);
  return [1, 2];
  // Esto nunca se va a ejecutar...
  console.log("Soy un código que esta después del return");
}

/** Problema con function */

// var saludar = 123;
// let saludar = 123;

/** FORMAS DE DECLARAR FUNCIONES */

/** 1. Función anónima */
const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

/** 2. Función de flecha */
saludarFlecha = () => {
  console.log("Hola Flecha");
};
saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("Geovanni", 40, true, "Costa Rica"); // 1
// console.log(retornoDeSaludar);
// saludar2("Geovanni");
// saludarFlecha();
// saludarFlecha2("Francesca");

/** ------------- Ejercicios ------------- */

/** Para dar sentido, para que me puede servir el return?
 * Bueno... usualmente las funciones tienen como tarea realizar o resolver algún problema ejecutando un códugo y que regrese algo
 * Como se ve en el caso de arriba
 */

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  return a + b;
};
const sumar3 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

// Transformar: En una función de flecha, que no tenga llaves {}
// getAleatorio2();

const getAleatorio2 = () => Math.random();

// console.log(sumar(1, 2));
// console.log(sumar2(1, 2));
// console.log(sumar3(2, 2));
// console.log(getAleatorio());
console.log(getAleatorio2());
