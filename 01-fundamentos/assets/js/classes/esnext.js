/** Propiedades privadas en JS
 *
 * Realicemos un ejemplo con un ejercicio de una clase para calcular el área de un rectángulo
 *
 * << Problema >>
 * Es un tema muy delicado y es necesario saber que sucede en javascript.
 *
 * Descripción: perfectamente podemos cambiar el área tanto manera accidental como intencional. Veamos más en el código
 *
 */

class Rectangulo {
  #area = 0; //# Evita que está propiedad sea modificada fuera de está clase

  //constructor
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }

  // Lamentablemente aún no tenemos métodos privados
  calcularArea() {
    console.log(this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100; // Esto se está cambiando de forma  directa a la propiedad "area". Como se ve se logró cambiar, pero no se debería ya que es un valor calculado y no manipulado. Por ello está debería ser una propiedad privada, evitando estos escenarios
rectangulo.calcularArea();

console.log(rectangulo);
