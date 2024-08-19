/**
 * << Problemática >>
 * Sección donde se plantea el problema que se está abordando en el código.
 */

const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

const geo = {
  nombre: "Geovanni",
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

// fher.imprimir();

// Definición de una función constructora para crear objetos de tipo Persona
// Se sigue la convención UpperCamelCase para indicar que es una función constructora
// aunque es opcional y podría comenzar con minúscula.
function Persona(nombre, edad) {
  console.log("Se ejecutó esta línea");

  // Establecer propiedades de objeto usando "this" para referirse al objeto actual
  this.nombre = nombre;
  this.edad = edad;

  // Método para imprimir los detalles de la persona
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

// Creación de nuevas instancias de Persona usando la función constructora y la palabra clave "new"
// Esto asigna el objeto devuelto por la función constructora a la variable maria y melissa
const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 35);

// Imprimir detalles de las instancias de Persona
maria.imprimir();
melissa.imprimir();
