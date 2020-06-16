const global = 'global';

function externe() {
  const closure = 'closure';
  function interne() {
    const local = 'local';
    console.log(local);
    console.log(global);
    console.log(closure);
  }

  return interne;
}

const interneFromExterne = externe();
interneFromExterne();
// interne(); // ReferenceError: interne is not defined

// pile d'appel
// ^
// |
// |          lg - lg - lg
// |externe - interne/interneFromExterne
// +---------------------------------------> temps
