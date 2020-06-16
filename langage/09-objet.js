// Syntaxe de création

const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
console.log(coords.y); // 2

// ajouter des clés
coords.z = 3;

// modifier
coords.z = 4;

// supprimer
delete coords.z;


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
