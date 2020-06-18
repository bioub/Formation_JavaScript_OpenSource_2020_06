/**
 * Insère une nouvelle ligne
 * @param {object} todo La todo à insérer
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function addTodo(todo, $containerEl) {
  const $rowEl = $("<div></div>").addClass("row");

  $('<input type="checkbox" class="completed">')
    .prop("checked", todo.completed)
    .appendTo($rowEl);

  $("<span></span>").text(todo.title).appendTo($rowEl);

  $("<button></button>").text('-').addClass('remove').appendTo($rowEl);

  // $rowEl.prependTo($containerEl);
  $containerEl.prepend($rowEl);
  //   containerEl.prepend(rowEl); // pensez au polyfill
  // prepend(rowEl, containerEl);
}
