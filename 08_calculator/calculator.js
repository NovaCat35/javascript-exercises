const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(numList) {
	return numList.reduce((accumulator, num) => accumulator + num, 0)
};

const multiply = function(numList) {
	return numList.reduce((accumulator, num) => accumulator * num, 1)
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
  let factorial = 1
  for(let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};
// This is another implementation of Factorial that uses recursion
// const recursiveFactorial = function(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
