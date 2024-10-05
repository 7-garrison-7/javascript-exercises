const removeFromArray = function(arrayInput, ...elementTargets) {
    let arrayOutput = [];
    arrayInput.forEach((item) => {
        if (!elementTargets.includes(item)) {
            arrayOutput.push(item);
        }
    })
    return arrayOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
