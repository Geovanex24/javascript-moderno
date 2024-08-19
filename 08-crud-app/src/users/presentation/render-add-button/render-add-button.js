import { showModal } from "../render-modal/render-modal";
import "./render-add-button.css";
/**
 *
 * @param {HTMLDivElement} element
 */
export const renderAddButton = (element) => {
  const fabButton = document.createElement("button");
  fabButton.innerHTML = "+";
  fabButton.classList.add("fab-button");
  element.append(fabButton);

  //TODO:
  fabButton.addEventListener("click", () => {
    showModal();
  });
};

// /**
//  *
//  * @param {HTMLDivElement} element
//  * @param {() => void} callback
//  */
// export const renderAddButton = (element, callback) => {
//   const fabButton = document.createElement("button");
//   fabButton.innerHTML = "+";
//   fabButton.classList.add("fab-button");
//   element.append(fabButton);

//   //TODO:
//   fabButton.addEventListener("click", () => {
//     // throw new Error("No implementado");

//     if (!callback) return;
//     callback();
//   });
// };
