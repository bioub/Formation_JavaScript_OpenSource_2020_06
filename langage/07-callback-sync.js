const prenoms = ["Romain", "Sylvain", "Jeremy"];

function hello(name = '', i, array) {
  console.log(`Hello ${name} ${i} ${array}`);
}

prenoms
  .filter((name) => name.length === 6)
  .map((name) => name.toUpperCase())
  .forEach(hello);
console.log('FIN');

// pile d'appel
// ^
// |               up   up   lg      lg
// |=> - => - =>   => - =>   hello - hello
// |filter       - map     - forEach       - lg
// +---------------------------------------------> temps
//                           ROMAIN  JEREMY  FIN
