import { addTodo } from "./todo.js";
import { fetchTodos } from "./api.js";

const $formEl = $(".form");
const $inputEl = $(".title");
const $containerEl = $(".container");
const $toggleEl = $(".toggle");

// lecture
if (localStorage.getItem("saisie")) {
  $inputEl.val(localStorage.getItem("saisie"));
}

// stockage
$inputEl.on("input", () => {
  localStorage.setItem("saisie", $inputEl.val());
});

$formEl.submit((event) => {
  event.preventDefault();
  addTodo(
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      title: $inputEl.val(),
      completed: false,
    },
    $containerEl
  );
});

$containerEl.on("click", ".remove", (event) => {
  $(event.target).parent().remove();
});

// Exercice 2 : Au clic cocher ou décocher tous les éléments checkbox
// du container
// MDN : querySelectorAll
$toggleEl.on("click", () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const $checkboxes = $containerEl.find(".completed");

  $checkboxes.prop("checked", $toggleEl.prop("checked"));
});

fetchTodos().then((todos) => {
  for (const todo of todos) {
    addTodo(todo, $containerEl);
  }
});
