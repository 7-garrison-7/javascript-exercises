const removeFromArray = function(arrayInput, ...elementTargets) {
    let arrayOutput = arrayInput;
    for (const elementArg of elementTargets) {
        for (let i = 0; i < arrayOutput.length;) {
            if (arrayOutput[i] == elementArg && typeof arrayOutput[i] == typeof elementArg) {
                arrayOutput.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    return arrayOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
