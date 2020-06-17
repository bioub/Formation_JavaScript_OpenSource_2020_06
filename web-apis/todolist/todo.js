import { prepend } from "./dom.js";

/**
 * Insère une nouvelle ligne
 * @param {object} todo La todo à insérer
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} container Le conteneur
 */
export function addTodo(todo, containerEl) {
  const rowEl = document.createElement("div");
  rowEl.className = "row";

  const checkboxEl = document.createElement("input");
  checkboxEl.type = 'checkbox';
  checkboxEl.classList.add("completed");
  checkboxEl.checked = todo.completed;
  rowEl.appendChild(checkboxEl);

  const spanEl = document.createElement("span");
  spanEl.innerText = todo.title;
  rowEl.appendChild(spanEl);

  // Exercice 1 : Ajouter le bouton moins
  // et au click supprimer la balise parent
  // Indice : remove (pensez au polyfill) ou removeChild -> MDN
    // le addEventListener est ici

  //   containerEl.prepend(rowEl); // pensez au polyfill
  prepend(rowEl, containerEl);
}
