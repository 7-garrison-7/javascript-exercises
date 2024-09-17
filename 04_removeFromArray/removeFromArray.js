const removeFromArray = function(arrayInput, elementTarget) {
    for (element in arrayInput) {
        if (element == elementTarget) {
            arrayInput.slice(arrayInput.indexOf(element), 1);
        }
    }
    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
