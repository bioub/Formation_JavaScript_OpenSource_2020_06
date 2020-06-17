const readline = require('readline');

const random = {
  getInt(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * max - min + 1) - min;
  }
}


class Jeu {
  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  essais = [];
  constructor(options = {}) {
    const min = options.min || 0;
    const max = options.max ?? 100; // Nullish coallescing operator (ES2020)

    // Object.assign(this, {min: 0, max: 100}, options);

    this.entierAlea = random.getInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' - '));
    }
    this.#rl.question('Quel est le nombre ? ', (saisie) => {
      // saisie est de type string
      const entierSaisi = parseInt(saisie);

      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.#rl.close();
      }

    });
  }
}



const game = new Jeu({
  max: 10
});
game.jouer();


// pile d'appel
// ^
// |
// |                                           question         question
// |                            question       jouer            jouer
// |require - createInterface - jouer ...      =>       ...     =>
// +-------------------------------------------ENTREE-----------ENTREE-------> temps
//
