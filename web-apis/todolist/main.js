import { addTodo } from './todo.js';

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.title');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.container');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.toggle');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo({
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        title: inputEl.value,
        completed: false,
    }, containerEl);
});

// Exercice 2 : Au clic cocher ou décocher tous les éléments checkbox
// du container
// MDN : querySelectorAll
toggleEl.addEventListener('click', () => {

});