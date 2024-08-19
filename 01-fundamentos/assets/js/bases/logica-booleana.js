const regresaTrue = () => {
  console.log("<<<<< Regresa true >>>>>");
  return true;
};

const regresaFalse = () => {
  console.log("<<<<< Regresa false >>>>>");
  return false;
};

/** Algunos operadores lógicos comunes en JavaScript */

/** 1. NOT (!)
 *
 * Se puede realizar la negación, en cualquier cosa que regrese un valor booleano
 */
console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

/** 2. AND (&&)
 *
 * El operador "y" se utiliza para verificar si todas las condiciones son verdaderas, retornando un true.
 * Si una de ellas es falsa, devuelve false.
 */
console.warn("And");
console.log(true && true); // true
console.log(true && false); //  false
console.log(true && !false); //  true

// *Nota: el operador AND, a parte de ser utilizado dentro de estructuras if también ejecuta acciones únicamente si la primera condición se cumple.
console.log("===============");
console.log(regresaFalse() && regresaTrue()); // false: Ejecuta solo la primera
console.log(regresaTrue() && regresaFalse()); // false: Ejecuta ambas

console.log("====== && =======");
// regresaTrue() && regresaFalse(); //Ejecuta la segunda, solo si la primera es true
regresaFalse() && regresaTrue();
console.log("4 condiciones AND", true && true && true && false); //  Devuelve false porque el primer falso detiene la evaluación

/** 3. OR (||)
 *
 * Devuelve true si al menos una de las condiciones es verdadera.
 */
console.warn("OR");
console.log(true || false); //  true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); //  true: Ejecuta solo la primera
console.log("4 condiciones OR", true || true || true || false); //  true

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1 = true && "Hola Mundo" && 150; //  "Hola Mundo"
const a1 = false && "Hola Mundo" && 150; //  false
// const a2 = "Hola" && "Mundo"; //  "Mundo"
// const a2 = "Hola" && "Mundo" && soyFalso; // false
const a2 = "Hola" && "Mundo" && soyFalso && true; //  false
const a3 = soyFalso || "Ya no soy falso"; //  "Ya no soy falso"
const a4 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; //   "Ya no soy falso de nuevo"
const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true; // true

console.log({ a1, a2, a3, a4, a5 });

/** Nota: no deberiamos tener más de 3 condiciones en un if
 * En tal caso, pensar en alguna forma de simplificar
 */

/** ❌❌ */
if (true || true || true || false) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}

/** ❌❌ */
if (regresaFalse() && regresaTrue() && (true || false || true)) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}

/** ✅
 *
 * No deberíamos pasar de esta complejidad. Recordar que si se convierte en algo muy complejo
 * lo ideao es buscar una menaera de simplificar, resumirlo y pudiendo ser más fácil de leer
 * para nosotros
 */
