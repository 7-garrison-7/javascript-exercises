const convertToCelsius = function(temp) {

  // Formula to Celsius is:
  // (x - 32) * (5 / 9)
  let result = ((temp - 32) * (5 / 9));

  result = result.toFixed(1);
  return parseFloat(result);

};

const convertToFahrenheit = function(temp) {

  // Formula to Fahrenheit is:
  // (x * (9/5) + 32)
  let result = (temp * (9 / 5) + 32);

  result = result.toFixed(1);
  return parseFloat(result);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
