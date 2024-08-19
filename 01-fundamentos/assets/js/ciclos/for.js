/**
 * << For >>
 *
 * El ciclo "for" es una de los más usados y existen 3 tipos.
 * */

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("For tradicional");
// Inicialización de la variable; condición;  incremento/decremento
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For in");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.log("For of");
for (heroe of heroes) {
  console.log(heroe);
}
