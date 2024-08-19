/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  // const myGenerator = myFirstGeneratorFunction();
  // console.log(myGenerator.next()); // Primer valor...

  const genId = idGenerator();
  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);

  // console.log(genId.next());
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId; // Primero incrementa y luego regresa el valor
  }
}

/** El yield
 * Es como ceder o viene siendo un return. Cuando la función se ejecutar y encuentra un yield se va a pausar.
 * Javascript va a saber en que punto quedó esta función generadora pausada.
 * Cuando ya no se necesite, se desecha.
 *
 */
// function* myFirstGeneratorFunction() {
//   yield "Primer valor";
//   yield "Segundo valor";
//   yield "Tercer valor";
//   yield "Cuarto valor";
//   return "Ya no hay valores";
//   yield "Ya no pueden hacer nada";
// }
