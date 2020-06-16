const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (saisie) => {
    // saisie est de type string

    // pour rejouer
    jouer();

    // pour arrêter la partie
    // rl.close();
  });
}

jouer();


// pile d'appel
// ^
// |
// |                                           question         question
// |                            question       jouer            jouer
// |require - createInterface - jouer ...      =>       ...     =>
// +-------------------------------------------ENTREE-----------ENTREE-------> temps
//
