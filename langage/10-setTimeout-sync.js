// function setTimeout(callback, delayMs) {
//   // attendre delayMs
//   const debut = Date.now();
//   while (debut + delayMs > Date.now());

//   // appeler le callback
//   callback();
// }

// setTimeout(() => console.log('A'), 500);
// setTimeout(() => console.log('B'), 0);
// setTimeout(() => console.log('C'), 1000);
// setTimeout(() => console.log('D'), 500);
// console.log('E');

function pause(delayMs) {
  // attendre delayMs
  const debut = Date.now();
  while (debut + delayMs > Date.now());
}

pause(500);
console.log('A');
pause(0);
console.log('B');
pause(1000);
console.log('C');
pause(500);
console.log('D');
console.log('E');
