const global = 'global';

function externe() {
  const closure = 'closure';
  function interne() {
    const local = 'local';
    console.log(local);
    console.log(global);
    console.log(closure);
  }

  interne();
}

externe();
// interne(); // ReferenceError: interne is not defined

// pile d'appel
// ^
// |lg - lg - lg
// |interne
// |externe
// +---------------------------------> temps
