/**
 * ¿Qué es un singleton?
 * En pocas palabras, un singleton es una instancia única de mi clase
 *
 * Contexto...
 * Imaginemos tener una clase en la cual solo se necesita tener una única instancia de manera global en toda la aplicación.
 * Es decir, pongamos el caso de que solo necesitamos una Persona. Si en una página se está trabajando con su clase,
 * se crean propiedades, se asignan o cambian valores, se obtiene información de algún servicio web y entre otras cosas.
 *
 * - Está información se quiere que sea de manera global
 * - A pesar de que en otros lugares del código se inicialicen las clases con "new Persona", no importa en cuantos
 *   lugares se haga (la cantidad de veces que se use "new Persona") siempre se va a retornar la misma instancia.
 *
 * Esa es la idea del singleton "no importa las múltiples instancias que se creen (si yo digo new un monton de veces),
 * siempre me regruese la misma instancia de mi clase"
 *
 * << Ventajas >>
 * Esto es bastante útil cuando se quiere compartir información a lo largo de la aplicación. También resulta  muy útil en bases de datos y más
 *
 * << Como utilizarlo >>
 * - Puede llamarse con cualquier nombre como PersonaSerive o el que se desee. En este caso se utiliza "Singleton" por fines educativos.
 *
 * Hay dos cosas totalmente opcionales, pero es bueno ponerlo para saber que es un singleton.
 * 1. static instancia;
 * 2. nombre
 *
 * En el constructor se recibe el nombre (vacío de momento), pero la idea es que si no se tiene ningua instancia entonces se asignará lo que se reciba como nombre a esta propiedad.
 * En caso contrario de ya tener una instancia, no importa lo que se que me mande la persona por el constructor siempre se va a regresar el nombre original que se tiene declarado como propiedad.
 * De nuevo estos campos son opcionales, perfectamente va a funcionar y hacer las pruebas respectivas
 *
 *
 */

class Singleton {
  static instancia; // undefined
  // Está será la instancia inicializada de mi clase, que cuando alguien más intente inicializarla y ya estaba inicializada va a regresar este valor
  nombre = "";

  constructor(nombre = "") {
    //Primera parte: comprobar si la "instancia" tiene un valor. Si hay algo almacenado ahí
    // console.log(Singleton.instancia); // Porque se hace referencia a "Singleton"... porque es estático

    // if ?
    // const a = undefined;
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this; // Tal vez parezca raro pero el "this" está haciendo referencia a instancia (declarada arriba) de la clase en este preciso momento
    this.nombre = nombre;

    //esto es opcional, pero un constructor puede regresar una instancia de la misma clase. Pero si no se especifica por defecto hace lo mismo
    // return this; Lo importante es saber que lo que se hacer en el constructor de una clase es retornar "this".
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`); //  Ironman
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`); //  Spiderman. Pero con Singleton "Ironman"
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`); //  Ironman
//Ayudar a ahorrar momoria!!!
