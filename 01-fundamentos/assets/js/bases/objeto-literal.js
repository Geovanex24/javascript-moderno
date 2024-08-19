/** -- Objetos literales --
 *
 * Los objetos literales en JavaScript son una forma de almacenar datos estructurados usando pares de valores (clave-valor).
 * Se les conoce comúnmente por la forma en que se declaran, la cual es mediante el uso de llaves {…}.
 *
 */

/**
 * Al utilizar las llaves {}, estamos declarando un objeto.
 *
 * Los objetos literales son objetos que tienen pares de valores (key: value)
 */
const personaje = {
  nombre: "Tony Stark", //propiedad (llave o key): valor
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima pelicula": "Infinity War", //No recomendada
};

/** ------- Imprimir un objeto ------- */
console.log("Personaje", personaje);

/** ------- Acceder al valor de una propiedad -------
 *
 * Existen 2 formas:
 */

/** Notación de puntos */
console.log("Nombre (Notación de punto)", personaje.nombre);

/** Notación de corchetes */
console.log("Nombre (Notación de corchetes)", personaje["nombre"]);

console.log("Edad", personaje.edad);
console.log("Coors", personaje.coords);
console.log("Latitud", personaje.coords.lat);

console.log("No. Trajes:", personaje.trajes.length);
console.log("Último traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";

console.log("Vivo", personaje[x]);

console.log("Última película", personaje["ultima pelicula"]); //No recomendada

/**  ------- Más detalles -------
 *
 * ¿Cómo eliminamos una propiedad?
 *
 *
 * Aunque declaramos el objeto como constante,
 * las siguientes líneas si se aplican ...
 *
 * De lo que nos preteje const es de no cambiar de un objeto a un array u otro tipo de valor
 * */

delete personaje.edad;

console.log(personaje);
personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

// personaje = true; // error

// ¿Cómo bloquear las propiedades de nuestro objeto
Object.freeze(personaje);

personaje.dinero = 1000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
//Protege las propiedades directas pero no los obj que esten dentro

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log({ propiedades, valores });
