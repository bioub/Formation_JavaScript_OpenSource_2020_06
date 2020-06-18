// Syntaxe de création

const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

// ajouter des clés (extensibilité)
coords.z = 3;

// modifier
coords.z = 4;

// supprimer
delete coords.z;

// on peut aussi utiliser des []
const key = 'z'
console.log(coords['x']); // 1
console.log(coords['y']); // 2
console.log(coords[key]); // 3

for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// simuler des classes (fonction constructeur)
// function Contact(prenom) {
//   // pseudo variable
//   this.prenom = prenom;
//   // this.hello = function() {}; // mauvaise pratique
//   // (1 fonction hello par objet contact)
// }

// Contact.prototype.hello = function() {
//   console.log('Hello ' + this.prenom);
// }

class Contact {
  constructor(prenom) {
    // pseudo variable
    this.prenom = prenom;
    // this.hello = function() {}; // mauvaise pratique
    // (1 fonction hello par objet contact)
  }
  hello() {
    console.log('Hello ' + this.prenom);
  }
}


const romain = new Contact('Romain');
console.log(romain.prenom);

romain.hello();
// Contact.prototype.hello.call(romain);

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

console.log(romain.prenom !== undefined); // true
console.log(romain.hello !== undefined); // true

Object.defineProperty(coords, 'test', {
  writable: false,
  value: 'test',
})
