const p1 = 'Jean'; // une case créée en mémoire qui contient 'Jean'
let p2 = p1; // passage par valeur/copie
p2 = 'Eric';
console.log(p1); // Jean

const o1 = { p: 'Jean' }; // 2 cases créées en mémoire à la position 1234 { p: 'Jean' }, dans o1 : 1234
const o2 = o1; // passage par référence
o2.p = 'Eric';
console.log(o1.p); // Eric
