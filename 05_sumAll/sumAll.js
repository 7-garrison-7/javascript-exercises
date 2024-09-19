const sumAll = function(first, last) {
    let sum = 0;
    let numArray = [];
    const small = first < last ? first : last;
    const big = first < last ? last : first;
    for (let i = 0; small+i <= big; i++) {
        numArray.push(small+i);
    }
    numArray.forEach((num) => {
        sum += num;
    })
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
