import { heroes } from "../data/heroes";

/**
 * Las promesas no es más que un objeto especial que posee JavaScript para manejar operaciones asincronas.
 */

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = `${hero.name}`;
  };
  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${hero1.name} vs ${hero2.name}</h3>
    `;
  };
  const renderError = (error) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3 style=color:red>${error}</h3>
    `;
  };

  const id1 = "5d86371f25a058e5b1c8a65e";
  const id2 = "5d86371f233c9f2425f16916";

  // --> Cuando los resultados no dependen entre sí (independientes)
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);

  // --> Promesas en cadena - Dependen del resultado

  // let hero1; // Se crea la referencia aca porque en las promesas están en un scope distinto
  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHeroes(hero1, hero2);
  //   })
  //   .catch(renderError);

  // --> Promise-Hell

  // findHero(id1)
  //   .then((hero1) => {
  //     findHero(id2)
  //       .then((her2) => {
  //         renderTwoHeroes(hero1, her2);
  //       })
  //       .catch(renderError);
  //   })
  //   .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((heroe) => heroe.id === id);
    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
