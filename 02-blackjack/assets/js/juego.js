/** Sintaxis del "patrón módulo" */

//Acá se define el módulo patrón
const miModulo = (() => {
  "use strict";

  let deck = []; // Baraja
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"]; /* As, Jack, Queen y King */

  // La computadora también es un jugador, junto con el resto. Con un [], se puede controlar todos los puntos de los jugadores.
  // Con ello no neceisto tener na var para el jugador y otra para la computadora
  //
  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    marcadoresPuntos = document.querySelectorAll("small");

  //Esta función inicializa el juego
  //Al inicializar el juego, indico la cantidad de jugadores totales, siendo el último la PC.
  // numJugadores = 1 esto indica que el numero  de jugadores por defecto es 1
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    marcadoresPuntos.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerText = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Esta función crea un nuevo deck o baraja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
      // deck.push(i + "C");
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    return _.shuffle(deck);
  };

  //crearDeck();// No llamar funciones en la nada

  //Esta función me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    //La carta debe de ser tomada de la baraja y de inmediato desaparecer de la baraja

    return deck.pop();
  };

  // Esta función permite conocer el valor o puntaje de la carta
  // El color del valor en la consola; gris => String; morador es un number
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); // También es posible realizarlo con expresiones regulares
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
  };

  // Turno: 0 = primer jugador y el último será la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    marcadoresPuntos[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, 3D
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].appendChild(imgCarta);
  };

  /**
   * El mensaje no se muestra en el momento adecuado porque JavaScript, en ocasiones, no es multihilo.
   * Esto significa que cuando el navegador está ejecutando código JavaScript, solo puede realizar una tarea a la vez.
   * Si hay operaciones costosas o bloqueantes en el hilo principal de JavaScript, como operaciones de red o cálculos intensivos, puede provocar retrasos en la actualización de la interfaz de usuario y en la visualización de los mensajes en el momento oportuno.
   * Para solucionar este problema, se pueden utilizar técnicas como el uso de Web Workers para realizar operaciones intensivas en segundo plano y mantener la interfaz de usuario receptiva. También es importante optimizar el rendimiento del código JavaScript para minimizar el impacto de las operaciones costosas en la experiencia del usuario.
   */
  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 100);
  };

  // << Turno de la computadora >>

  // Se necesita ejecutar el ciclo al menos una vez. Si el jugador pide una carta, se necesita al menos una carta.
  // Y si el jugador presiona inmediatamente el botón "Detener", aún se requiere al menos una carta para manejar la acción.
  // Siempre se necesitará una carta adicional para superar cualquier acción tomada por el usuario.
  // POR ESTA RAZON USAMOS DO-WHILE
  // puntosMinimos => puntosJugador
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho! Has perdido!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  // btnNuevo.addEventListener("click", () => {
  //   inicializarJuego();
  // });

  //En la programación orientada a objetos, únicamente lo que se retorne va a ser público y visible afuera de este módulo. Todo lo demás va a ser privado
  // *Nota: JS ya ha creado una forma de crear propiedades o clases con propiedades privadas. Tema visto más adelante
  return {
    nuevoJuego: inicializarJuego,
  };
})();
