const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  console.log('Vous avez saisi : ' + essais.join(' - '));
  rl.question('Quel est le nombre ? ', (saisie) => {
    // saisie est de type string
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }

  });
}

const entierAlea = Math.floor(Math.random() * 101);
const essais = [];
jouer();


// pile d'appel
// ^
// |
// |                                           question         question
// |                            question       jouer            jouer
// |require - createInterface - jouer ...      =>       ...     =>
// +-------------------------------------------ENTREE-----------ENTREE-------> temps
//
