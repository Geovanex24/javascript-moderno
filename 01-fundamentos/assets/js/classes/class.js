/**
 * << Classes >>
 *
 * Las clases en javascript se parecen mucho a las clases en Java y, bueno basicamente, a las clases en C. Sin embargo, existen varias características
 * que las hacen únicas (aunque no siempre son ampliamente aceptadas por los desarrolladores).
 *
 * Nota: de estás características se hablará más adelante...
 */

/**
 * << Para entenderlo mejor, comencemos con un ejercicio >>
 *
 * 1. Se crea una nueva clase con la palabra reservada "class".
 * 2. Es recomendado comenzar el nombre de la clase con mayúscula. Si el nombre consta de varias palabras, se utiliza UpperCamelCase, ya que es una buena práctica y se acostumbra hacerlo de esta manera.
 * 3. Seguido del nombre de la clase, se colocan las llaves de apertura y cierre {} para definir el cuerpo de la clase.
 * 4. Esta es toda la sintaxis para crear la definición de una clase.
 *
 * << Métodos y propiedades básicas >>
 * Son las características fundamentales de una clase. Incluyen tanto los métodos como las propiedades.
 *
 * ## Constructor ##
 * Es un método que se ejecuta exactamente en el momento en que se crea una nueva instancia del objeto (en este caso, Persona). También vale la pena decir que el constructor es el único método que retorna una instancia de un objeto y no un "undefined". Aunque se lo añadamos en duro.
 *
 * Para utilizar esta clase, o mejor dicho, crear una nueva instancia de dicha clase, se hace de la siguiente manera:
 * const nombreInstancia = new Clase();
 *
 * Basándonos en el ejemplo de abajo, al guardar cambios e ir al navegador, notaremos que en la consola dice "Hola". Esto es genial, porque antes de crear la instancia permite ejecutar el código que está dentro del constructor. Cuando se termina de ejecutar el constructor, ahí es donde se va a regresar una nueva instancia de nuestra clase.
 *
 * ## Propiedades ##
 * Son las características de una clase y se conocen como propiedades. Se recomienda definirlas justo debajo de la llave de apertura de la clase y antes del constructor.
 *
 * Ahora bien, al verificar en el navegador, notaremos que nuestra instancia tiene las propiedades que definimos. Sin embargo, cada una de ellas tiene un valor inicial de "undefined". Esto tiene sentido, ya que en JavaScript, cuando se crea una variable y no se le asigna un valor por defecto, ésta se define como "undefined".
 * Se pueden inicializar con un valor por defecto, como por ejemplo: propiedad = "Aquí colocamos el valor por defecto"; // Puede ser un 0, una cadena vacía, etc.
 *
 * * Ojo!!! No confundir con la inicialización de variables. Esto corresponde a la inicialización de propiedades de clase.*
 *
 * * Cabe mencionar que todas las clases en JavaScript tienen el 'use strict' implementado por defecto.*
 * Dado entonces si se desea acceder a las propiedades de la clase en el constructor se debe anteponer "this." a la propiedad que deseamos.
 * Esto es propio del modo estricto de las clases en javascript. Mas de uno puede pensar pero... la variable "codigo" se existe por que no la acepta en el constructor. No lo
 * está aceptando porque está haciendo referencia a una varibale del scope que solo existe en el bloque de Persona. El scope del constructor es distinto. Y por ello el this.
 *
 * Vamos a inicializar cada uno de esos valores en el constructur. Este recibe los arugmuentos (nombre, codigo, frase)
 *
 * ## Métodos ##
 * Los métodos no son más que funciones que se ejecutan dentro del contexto de la clase, o mejor dicho, dentro de la instancia de la clase. Aunque puede depender
 * de si son estaticas o no. **Los métodos estáticos serán visto más adelante.**
 *
 * - Se acostumbra que estén después del constructor
 *
 * ## Sets y Gets ##
 * ¿Qué son? Habrán momentos en los cuales antes de establecer un valor de una propiedad o recuperar su valor, queramos
 * controlar como se estblece.
 *
 * "En pocas palabras, los getters y setters son herramientas para controlar y gestionar datos dentro de las clases, lo que contribuye a un código más organizado y mantenible."
 *
 * Set: Se utilizan para establecer un valor
 * Get: Se utilizan para recuperar o obtener un valor
 *
 * "Contexto...Es decir, vamos a pensar que se quiere que la variable de comida siempre tiene que estar en mayuscula. Pero no
 * se quiere otorgar ese poder al usuario para que la almacene y, si él se acuerda la pongan en mayuscula. Se quiere entonces un setter (set)
 * para que cada vez que se establezca un valor en la comida siempre este en mayuscula"
 *
 * Donde se colocan?
 * Se colocará en este caso debajo del constructor
 * Pero, la verdad el lugar donde se pone el set y get según buenas prácticas no queda del todo claro.
 * Usualmente el orden es el siguiente:
 * - Primero, propiedades y métodos estaticos
 * - Luego las propiedades de la clase
 * - Constructor
 * - Setters y Getters
 * - Y los métodos
 *
 *  Por último, tambien hay personas que acostumbran a poner todo lo que es privado al final de la clase
 *
 * Para crear un set:
 * - Se utiliza la palabra reservada "set" seugido de un nombre que represnte la propiedad o explique lo que hace => "set + NombreDeLaPropiedad(valor)"
 * - Comunmente se suele  llamar "setNombrePropiedad" incliyendo la  palabra "set" para que quede claro que es para establecer un valor y que corresponde a un setter (No obligatorio, pero es buena práctica)
 * - También es necesario indicar el argumento que reciben => "set + NombreDeLaPropiedad(valor)"
 * - Usualmente solo recibe un argumento
 * - Y a diferencia de los metodos, los sets se llaman de manera diferente.
 * - El set no puede tener el mismo nombre de la propiedad. Por eso mucha gente utiliza la convención de  ponerle un guión bajo (_) antes. Por ejemplo _comida. Y de esta manera establecer sin problema el set, Tal que así:
 *
 * ...
 * _comida = "";
 *
 * set comida(comida){
 *  this._comida = comida
 * }
 * ...
 *
 * ¿Cómo utilizamos un set?
 *  Para utilizar el set es como si fuera cualquier otra propiedad de nuestra clase. No se utiliza (), si es un set
 * funciona como cualquier otra propiedad
 *
 * ...
 *   persona.comida = "pizza";
 * ...
 *
 * Antes de hablar sobre el get, el profe Fernando Herrera menciona en la clase anterior sobre que existen cosas que suceden en javascript que no
 * son de su agrado, pero existen y es algo que se debe de evitar aunque es posible hacerlo.
 *
 * Si se toma la instancia de spiderman y se hace lo siguiente:
 *
 * ...
 * spiderman.nemesis = "Duende verde" ❌
 * o
 * spiderman.comida  = "Duende verde" ❌ // Al no ser una propiedad privada, funciona sin problema. JS implementó las propiedades privadas pero solo funciona en chrome de momento (Año 2019....puede que ahora tenga más alcance en otros navegadores)
 * ...
 *
 * Muchos pensarán que marcara error... por qué? Porque la propiedad existe dentro de Persona. Sin embargo, js lo acepta!
 *
 *
 * Ahora bien, para un crear un get:
 *
 * ...
 *  get getNombreDeLaPropiedad( ){
 *    return this.propiedad;
 *  }
 * ...
 *
 * ## Propiedades, gets y métodos estáticos ##
 * Tanto las propiedades como los métodos estáaticos, básicamente nos permiten poder utilizarlos sin necesidad de instanciar la clase.
 *
 * ¿Para que me puede servir una propiedad estática?
 * Para entenderlo ... Realicemos un ejercicio interesante : que permita saber cuantas instancias de mi clase se han inicializado.
 *
 * También podemos tener un GET estático, que es exactamente de la misma manera.
 *
 * Hay algo más que es posible hacerlo, aunque no es del agrado de muchos programadores e incluso en otros lenguajes marcaría un error. Y es
 * la posibilidad de "definir propiedades estáticas fuera de la clase".
 *
 * Si se quisera se puede trabajar mi clase "Persona" como si fuera un objeto, aunque ya realmente ya lo es!
 * Pero lo anterior hace referencia a tratarse como un "objeto literal" y poder decir...
 *
 * ...
 *  Persona.propiedadExterna = "Hola Mundo";
 * ...
 *
 * De esta manera js va a crear dentro de Persona está propiedad estática externa.
 *
 * Terminando con este tema, se acostumbra a colocar las propiedades ... estáticos justo abajo de la definición de la clase
 *
 */

// el  "_" no indica nada respecto a hacerla estática o no!. Si gaurdamos cambios y miramos la consola vemos que aparece nuestra propiedad "_conteo" como parte de Persona
// Al agregar "static", está ya no aparece ... desaparece ... dénde está ... bueno depende del navegador ... pero en chrome si nos fijamos en el __proto__, ahí está en el constructor. Ahora esto realmente no importa donde esté. Lo que importa saber es que tnego una propiedad estática
// ¿Parq que me puede servir una propiedad estática?
class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre); // undefined
    console.log("Hola a todos, soy un método estático");
  }

  /** Realizar está declaración es opcional y dejarlo en el constructor. Esto gracias a que mediante el constructor son recibidas y por ende creadas (Por su puesto deben ser pasadas como argumentos al constructor, para ser creadas de esta forma y no mediante una pre declaración)
   * Sin embargo hay una diferencia notoria y, es que si en nuestra clase necesitamos de una propiedad adicional como por ejemplo: "comida". Esta será visible, pero no es recibida mendiante el constructor
   */
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase"
  ) {
    // console.log("Hola!");
    // this.codigo = "ABC"; // ✅
    // codigo = "ABC"; //Esto no es permitido por  el 'use strict'. Dará error ❌

    // Eso sería conveniente que venga ya venga como un error dentro de js, como sucede en otros lenguajes com Java
    // if (!nombre) throw Error("Necesitamos el nombre");

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++; // Lleva el conteo
  }

  // <<Sets y Gets >>
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    // return `La comida favorita de ${this.nombre} es ${this.getComidaFavorita}`; // No es posible usar el mismo nombre del get. Marca error ❌
    return `La comida favorita de ${this.nombre} es ${this.comida}`; // Se indica el nombre de la propiedad a la cual hacemos get ✅
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

//Si no pasamos los argumentos no marca error como en otros lenguajes
// en javascript, lo que le damos a entender que pase undefined, en cada uno de los valores
const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino spiderman"
); // Hola!
const ironman = new Persona("Tony Stark", "Ironman", "Yo soy Ironman");

// console.log(ironman);
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tía May";

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2; //Asi no es como lo pensamos hacer, pero se puede hacer así perfectamente! Lo haremos de forma automatica en la clase
// Dónde puedo ejecutar el conteo o llevar la cuenta de instancias... bueno el lugar perfecto dentro de la clase es el constructor
// Esto porque el constructor se va a ejecutar siempre que se necesite crear una nueva instancia de mi clase... veamos como se hace.(Arriba en el constructor)..
console.log("Conteo estático", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

/** << Definir propiedades estáticas fuera de la clase >> */
Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);
