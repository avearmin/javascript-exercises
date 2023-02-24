const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
	return sum;
};

const multiply = function(array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(base, exponent) {
  let exponentiation = base;
  for (let i = 1; i < exponent; i++) {
    exponentiation *= base;
  }
  return exponentiation;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
