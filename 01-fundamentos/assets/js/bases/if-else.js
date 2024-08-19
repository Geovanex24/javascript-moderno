let a = 5;

if (a >= 10) {
  // undefined, null, una asignación
  console.log("A es mayor o igual a 10");
} else {
  //   console.log("A es menor que 10");
}

// console.log("Fin del programa");

const hoy = new Date(); //Concepto nuevo: el "new" permite "crear" una "nueva instamcia" de un "objeto", en este caso Date
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

// console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");

  //   if (dia === 1) {
  //     console.log("Lunes");
  //   } else {
  //     console.log("No es lunes ni domingo");
  //   }
} else if (dia === 2) {
  console.log("Martes");
} else {
  //   console.log("No es lunes, martes o domingo");
}

/** Laboratorio #1
 *
 * Sin usar If Else, o Switch, únicamente objetos para realizar la misma tarea e imprimir:
 *
 * - El día de la semana, desde el "Domingo hasta el Sábado"
 */
dia = 3; //0: domingo, 1: lunes....

const diasLetras = {
  0: () => "Domingo - 0",
  1: () => "Lunes - 1",
  2: () => "Martes - 2",
  3: () => "Miércoles - 3",
  4: () => "Jueves - 4",
  5: () => "Viernes - 5",
  6: () => "Sábado - 6",
};

const diasLetras2 = [
  "Domingo ",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// console.log(diasLetras[dia]());
console.log(diasLetras2[dia]);
