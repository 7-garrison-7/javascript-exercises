const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accum, current) => accum + current, 0);
};

const multiply = function(array) {
  return array.reduce((accum, current) => accum * current);

};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  } else {
    let factors = [];
    for (let i = num; i > 0; i--) {
      factors.push(i);
    }
    return factors.reduce((accum, current) => accum * current);
  }
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
