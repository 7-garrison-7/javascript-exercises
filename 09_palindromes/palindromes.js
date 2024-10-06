const palindromes = function (string) {
    const regEx = /\W/g;
    const stringFormatted = string.toLowerCase().replaceAll(regEx, '');
    const stringReversed = stringFormatted.split('').reverse().join('');
    return stringFormatted == stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
