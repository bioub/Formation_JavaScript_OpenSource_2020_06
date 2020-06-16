setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
console.log('E');

// pile d'appel
// ^
// |
// |
// |                           lg          lg  lg      lg
// |st - st - st - st - lg ... cbB ...     cbA cbD ... cbC
// +---------------------------6-----------501-503-----1000----> temps
//                      E      B           A   D       C

// file d'attente (0ms) : cbB
// file d'attente (6ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (503ms) :

// Jake Archibald - In the Loop (JSConf Asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
