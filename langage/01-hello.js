const prenoms = ["Romain", "Sylvain", "Jeremy"];

/**
 * @param {string} name
 */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
