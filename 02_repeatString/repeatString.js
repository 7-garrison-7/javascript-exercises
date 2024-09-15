const repeatString = function(string, num) {
    
    if (num >= 0) {
        const repeatedString = new Array(num); 
        for (let i = 0; i < num; i++) {
            repeatedString[i] = string;
        } 
        return repeatedString.join(""); 
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
