const removeFromArray = function(arrayInput, ...elementTargets) {
    let arrayOutput = [];
    for (const elementArg of elementTargets) {
        for (const currentElement of arrayInput) {
            if (currentElement != elementArg) {
                arrayOutput.push(currentElement);
            }
        }
    }
    return arrayOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
