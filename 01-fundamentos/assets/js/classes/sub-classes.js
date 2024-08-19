/**
 * ## Extends - Clases con SubClases ##
 * Eventualmente, va a llegrar un punto donde queramo trabajar con "Herencia". Es decir, imaginmenos que necesitemos
 * crear otra clase pero que también tenga las propiedades de Persona (nombre, codigo, frase y cmoida) en esta otra clase. Y
 * por consiguiente para no tener que volver a definir los atributos, propiedades y posiblemente otros métodos en cada subclase y, se comienza a ver la
 * necesidad de recurrir a la herencia en js. Otras personas le conocen como poder extender una clase.
 *
 * Esto nos ayuda a:
 * - Poder reducir la cantidad de código
 * - Evita tener que copiar código
 * - Podemos utlizar propiedades, métodos y más de la clase Padre, solo con indicar que la clase hijo extiende de su padre
 *
 * Sino, trabajamos con el contructor de Heroe, automaticamente  se llama al constructor del padre y se ejecuta su codigo. Pero
 * si queremos crear y trabajar con nuestro porpio constructor, debemos llamar al constructor padre con la palabra reservada "super", este hace referencia a la clase que extiende directamente.
 *
 * Para pasar las propiedades simplemente las pasamos  al constructor de la subclase, y para  llamar al constructor de la superclase se utiliza super(con las propiedades que deseamos usar de ella).
 * Entonces lo que sucede cuando creamo una nueva instancia de heroe se dispara el constructor de la subclase.
 *
 * Ahora aquí sucede otra cosa importante y, es una regla en js. De lo cual no hay que preocuparse porque esto va a marcar un error.
 * Si se necesita inicializar el valor del clan, veamos más en el codigo de abajo. Al inicializar marca un error que
 * indica que se debe llamar el super constructor (O constructor del padre, antes de acceder a cualquier método propiedad que use
 * this.
 *
 * Esto es una regla que inmediatamente después del constructor se llame el super(), a menos de lo que se haga antes no requiera el this en lo absoluto
 *
 * ...
 *
 * constructor(nombre, codigo, frase) {
 *  const a = 10;
 *  let b = 10 + a;
 *  super(nombre, codigo, frase);
 *  this.clan = "Los Avengers"; // inicializar el valor del clan
 * }
 * ...
 *
 * Otra cosa que tiene interesante las clases que son extendidas de otras es que aparte de las propiedades también tiene sus métodos.
 * Ahora si se define un metodo con el mismo nombre parece como que se sobrescribe. En este caso el "quienSoy()" de Persona.
 * En caso de necesitar el de sperclase (Persona) y de igual forma mantener el que se creo en la sublcase (Heroe), perfectamente se puede hacer
 *
 * Si se necesita llamar algo directamente de la clase padre y se está sobreescribiendo en la subclase. Simplemente se utilizar super(). Veamos ...
 *
 * ...
 *  quienSoy() {
 *  console.log(`Soy ${this.nombre}, ${this.clan}`);
 *  super.quienSoy();
 * }
 * ...
 */

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

class Heroe extends Persona {
  clan = "Sin Clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Los Avengers"; // inicializar el valor del clan
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu amigable vecino spiderman"
); // Hola!
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();
