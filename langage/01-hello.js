const prenoms = ['Romain', 'Sylvain', 'Jeremy'];

function hello(name) {
  return `Hello ${name}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
