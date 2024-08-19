const superHeroes = [
  { id: 1, name: "Batman" },
  { id: 2, name: "Superman" },
  { id: 3, name: "Flash" },
  { id: 4, name: "Aquaman" },
];

// Los objetos en general, es decir, cualquier cosa que no sea un primitivo suelen pasar por referencia

// Crear una copia sin afectar la referencia del original

// Podemos usar el "..." si lo datos dentro del array son primitivos, de lo contrario no tendremos el resultado deseado
// const superHeroesCopy = [...superHeroes];

// structuredClone es una de muchas formas posibles. Sin embargo, no es compatible en todos los navegadores
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = "Green Lantern";

console.table(superHeroes);
console.table(superHeroesCopy);
