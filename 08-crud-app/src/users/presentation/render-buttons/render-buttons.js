import "./render-buttons.css";
import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerHTML = " Next >";

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "< Prev ";
  prevButton.disabled = true;

  const currentPageLabel = document.createElement("span");
  currentPageLabel.id = "current-page";
  currentPageLabel.innerHTML = usersStore.getCurrentPage();

  element.append(prevButton, currentPageLabel, nextButton);

  nextButton.addEventListener("click", async () => {
    prevButton.disabled = false;
    await usersStore.loadNextPage();
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
    renderTable(element);
  });
  prevButton.addEventListener("click", async () => {
    nextButton.disabled = false;
    await usersStore.loadPreviousPage();
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
    renderTable(element);
    prevButton.disabled = usersStore.getCurrentPage() <= 1;
  });
};
