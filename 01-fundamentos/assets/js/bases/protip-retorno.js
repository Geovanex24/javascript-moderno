/** Pro-tip #1
 *
 * Desde ES6 en adelante, cuando se desea devolver algo en un objeto
 * y el nombre de la propiedad es exactamente el mismo que el nombre de la variable pasada como parámetro,
 * no es necesario especificarlo dos veces.
 *
 */

function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}
function crearPersona2(nombre, apellido) {
  return { nombre, apellido };
}

/** Pro-tip #2
 *
 * <<<<< Arrow function >>>>>
 *
 * Para aplicar la función anterior, pero con arrow function. Se debe colocar (),
 * para devolver el return en una sola línea. Por el contrario Javascript lo confundirá con el cuerpo de la función
 * y devolverá "undefined"
 * */
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona3("Geovanni", "Fernández");
console.log(persona);

// Output: {nombre: "Geovanni", apellido: "Fernández"}

/** Pro-tip #3
 *
 * La declaración de funciones tradicional permite utilizar un valor llamado "arguments",
 * el cual permite ver todos los argumentos que pasamos por parámetros a una función,
 * incluso si no se hace uso de todos ellos.
 *
 * Cabe resaltar que, con las arrow functions, esta funcionalidad no está disponible.
 * Sin embargo, podemos lograrlo de la siguiente manera, pero teniendo en cuenta dos consideraciones.
 *
 */

function imprimeArgumentos() {
  console.log(arguments);
}
const imprimeArgumentos2 = (edad, ...args) => {
  // console.log({ edad, args });
  return args;
};

/** Pro-tip #4
 *
 * ¿Qué pasa si necesito acceder al valor de las variables pasadas por parámetros? Lo que se retorna es un arreglo, por lo
 * tanto, podemos usar corchetes [] y asignar inmediatamente un nombre a cada una de las posiciones del arreglo.
 *
 */

// imprimeArgumentos(10, true, false, "Fernando", "Hola");
// imprimeArgumentos2(10, true, false, "Fernando", "Hola");
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Fernando",
  "Hola"
);
// const vivo = argumentos[0];
// const casado = argumentos[1];
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("Geovanni", "Fernández");

console.log({ nuevoApellido });

/** Pro-tip #5: Destructuración de argumentos
 *
 *
 */

const tony = {
  nombre: "Tony Stark", //propiedad (llave o key): valor
  codeName: "Ironman",
  vivo: false,
  // edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("nombre", personaje.nombre);
//   console.log("codeName", personaje.codeName);
//   console.log("vivo", personaje.vivo);
//   console.log("edad", personaje.edad);
//   console.log("trajes", personaje.trajes);
// };
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  // edad = edad || 0;

  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
