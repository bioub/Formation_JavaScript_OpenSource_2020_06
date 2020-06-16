// function declaration
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
console.log(sum('1', '2'));
console.log(sum(1, 2, 3));
console.log(sum(1));

// function expression
const sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(1, 2));

const prenoms = ['Romain', 'Sylvain'];
prenoms.forEach(function() { // function expression
  console.log('Hello');
});

// arrow function (ES6) (expression)
const sum3 = (a, b) => a + b;
console.log(sum3(1, 2));
prenoms.forEach(() => { // function expression
  console.log('Hello');
});


// default param (ES6)
function sum4(a, b = 0) {
  if (a === undefined) {
    throw new Error('a obligatoire');
  }
  return a + b;
}

console.log(sum4(1)); // 1


function sum4(a, b) {
  let result = a + b;

  for (let i = 2; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

console.log(sum4(1, 2, 3, 4)); // 10
