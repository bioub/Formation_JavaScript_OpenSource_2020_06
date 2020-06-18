import { addTodo } from "./todo.js";
import { fetchTodos } from "./api.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector(".form");

/** @type {HTMLInputElement} */
const inputEl = document.querySelector(".title");

/** @type {HTMLDivElement} */
const containerEl = document.querySelector(".container");

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector(".toggle");

// lecture
if (localStorage.getItem("saisie")) {
  inputEl.value = localStorage.getItem("saisie");
}

// stockage
inputEl.addEventListener("input", () => {
  localStorage.setItem("saisie", inputEl.value);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      title: inputEl.value,
      completed: false,
    },
    containerEl
  );
});

containerEl.addEventListener("click", (event) => {
  /** @type {HTMLElement} */
  const element = event.target;
  if (element.classList.contains("remove")) {
    containerEl.removeChild(element.parentElement);
  }
});

// Exercice 2 : Au clic cocher ou décocher tous les éléments checkbox
// du container
// MDN : querySelectorAll
toggleEl.addEventListener("click", () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = containerEl.querySelectorAll(".completed");

  // const checkboxesArray = Array.from(checkboxes);

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

fetchTodos().then((todos) => {
  for (const todo of todos) {
    addTodo(todo, containerEl);
  }
});
