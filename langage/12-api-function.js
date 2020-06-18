// 'use strict'; en mode this est undefined

const prenom = 'Romain (module)';
globalThis.prenom = 'Romain (global)';

function hello(p1, p2) {
  console.log(`Hello ${p1}, ${p2} my name is ${this.prenom}`);
}

const hello2 = hello;

hello('Sylvain', 'Jérémy');
hello2('Sylvain', 'Jérémy');

const contact = {
  prenom: 'Romain (objet)',
};

hello.call(contact, 'Sylvain', 'Jérémy');
hello.apply(contact, ['Sylvain', 'Jérémy']);
const helloContact = hello.bind(contact);
helloContact('Sylvain', 'Jérémy');

// function bind(that, fct) {
//   return function() {
//     fct.call(that);
//   }
// }
