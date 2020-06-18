export function fetchTodos() {
  return $.get('https://jsonplaceholder.typicode.com/todos');
}