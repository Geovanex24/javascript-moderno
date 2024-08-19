// alert('Hola desde app.js'); //Alet es una funcion que se encuantra dentro del objeto global window

/**
 * ¡Hola mundo!
 */
// console.log("Hola mundo");

/**
 * -------- Introducción a variables y comentarios --------
 *
 *
 * ¿Qué son los comentarios?
 * Son líneas de código que al intérprete de Javascript ignorará a la hora de ejecutarlo
 *
 * Es como si jamas existieran
 *
 * Acá algunas formas de hacer comentarios
 *
 * Los comentarios nos ayudan a crear anotaciones e incluso documentar nuestro código. Pero también a ignorar una parte
 * código si así lo queremos.
 */

// console.log("Hola mundo");

/** Esto es un comentario
 * de múltiples líneas
 */

/**
 * ¿Qué es una variable?
 * Es un contenedor de información que apunta a un lugar en memoria.
 *
 * Dicha infromación puede cambiar en el futuro
 */

/** CREAR UNA VARIABLE
 * Las 3 son formas de determinar o crear variables
 *
 * var y let ambas son formas de crear variables pero... ¿Qué diferencias tienen?
 * * La principal es su scope (ámbito)
 * * Inicialización y redeclaración de variables
 */
// let a = 10;
// var b = 10; //Ya no es recomienda usar, pero sigue siendo válida porque js procura ser compatible con los browsers

/** Pregunta tricky
 * ¿Es posible crear una variable como en la siguiente línea?
 * Sí, pero esto es mala práctica. Siempre tiene que inicializar con let o const
 */
// c = 30;

//const c = 10; Esta es una constante y no cambia

// c = 20; Esto provoca un error y por ende no se puede hacer

let a = 10,
  b = 20,
  c = 'Hola ',
  d = 'Spiderman',
  x = a + b;

const saludo = c + d;

// console.log(x);

c = 'Hola de nuevo';

console.log(miNuevoNombre + ' Elizondo');

/** -------- Introducción a la consola -------- */
// console.log(x);
// console.warn(x);
// console.error(x);
// console.info(x);

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// console.log('%c Mis variables', 'color: blue; font-weight: bold');
// console.log({ a });
// console.log({ b });
// console.log({ c });

// console.table({ a, b, c, d, x });

//let outerWidth = 1000000; //al utilizar var, js lo coloca dentro del objeto window. Hoy en día, por esta razón no se recomienda usar VAR
// const outerHeight = 600;

//var miNuevoNombre = 'Geovanni Fernández'; // el console.log mostraría "undefined", ya que donde realizamos el log. Está variable aún no existe
let miNuevoNombre = 'Geovanni Fernández'; // Cannot access 'miNuevoNombre' before initialization
