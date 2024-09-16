const reverseString = function(originalString) {
    let reversedString = '';

    for (let i = 0; i < originalString.length; i++) {
        reversedString += originalString.substring((originalString.length-1)-i, (originalString.length)-i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
