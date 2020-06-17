class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  // hello() {
  //   const that = this;
  //   setTimeout(function() {
  //     // console.log(this); // Timeout de Node.js
  //     console.log('Hello ' + that.prenom);
  //   }, 100);
  // }
  // hello() {
  //   setTimeout(function() {
  //     console.log('Hello ' + this.prenom);
  //   }.bind(this), 100);
  // }
  hello() {
    // this de la portée de closure
    setTimeout(() => {
      console.log('Hello ' + this.prenom);
    }, 100);
  }
}

const romain = new Contact('Romain');
romain.hello();
