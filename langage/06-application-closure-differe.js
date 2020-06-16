for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

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
