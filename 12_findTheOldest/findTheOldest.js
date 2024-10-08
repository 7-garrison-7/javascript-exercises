const findTheOldest = function(array) {
    return(array).sort((a, b) => (
        (b.yearOfDeath == undefined ? new Date().getFullYear() : b.yearOfDeath) - b.yearOfBirth) - 
        ((a.yearOfDeath == undefined ? new Date().getFullYear() : a.yearOfDeath) - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;