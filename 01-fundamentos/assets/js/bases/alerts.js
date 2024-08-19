/** Prompt, confirm y alert
 *
 * Son funcionaes ya incorporadas en JavaScript que permiten interactuar con los usuarios en aplicaciones web.
 * Hoy en día ya no son tan usadas, porque existen librerías que nos permiten hacer alertas más bonitas y
 * amigables con los usuarios.
 *
 * Es una características vieja de javascript, pero es importante conocer
 *
 * *Todos ellos pertenecen al objeto window, incorporado dentro del browser. Esto quiere decir que los alerts, prompts o confirm
 * * solo se pueden ejecutar en los navegadores
 *
 */

// alert('Hola mundo');

let nombre = prompt('¿Cuál es tu nombre?');
/* 
Sino pasamos nada...
Retorna, lo que se le conoce como string vacío. No es lo mismo a "undefined" o "nulo"*/
console.log('****' + nombre + '****'); // Es un string vacío. Ej. ********
console.log(nombre); // null

/** Valores en una variable
 *
 * UNDEFINED = Indica que una variable no se ha definido o no se le ha asignado un valor.
 * String vacío = Se refiere a una cadena de caracteres sin ningún contenido.
 * String = Representa una cadena de caracteres en JavaScript, que es una secuencia de texto.
 * NULL = En JavaScript, null se utiliza para representar la ausencia intencional de cualquier valor u objeto.
 */

const seleccion = confirm('¿Esta seguro de borrar esto?'); // true o false
console.log(seleccion);
