const sumAll = function(first, last) {
    for (arg of arguments) {
        if (!Number.isInteger(arg) || Math.sign(arg) == -1) {
            return("ERROR");
        }
    }
    let sum = 0;
    const small = first < last ? first : last;
    const big = first < last ? last : first;
    for (let i = 0; small+i <= big; i++) {
        sum += small+i;
    }
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
