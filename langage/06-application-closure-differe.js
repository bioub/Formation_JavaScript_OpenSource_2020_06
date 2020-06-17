for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// pile d'appel
// ^
// |
// |
// |
// |for { st - st - st }                cb0   cb1  cb2
// +----------------------i===3---------1001----------> temps
//
// file d'attente (1000ms) : cb0 - cb1 - cb2
// file d'attente (1001ms) : cb1 - cb2
// file d'attente (1002ms) : cb2
// file d'attente (1003ms) :


// Dans 1000ms : 3 3 3
function save(val) {
  return function() {
    console.log(val);
  }
}

for (var i=0; i<3; i++) {
  setTimeout(save(i), 1000);
}
// Dans 1000ms : 0 1 2


for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Dans 1000ms : 0 1 2
