const findTheOldest = function(input) {
    
    input.sort((a,b) => {
        if((!b.yearOfDeath) && (a.yearOfBirth > b.yearOfBirth)){
            return 1;
        }
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge > aAge ? 1 : -1;
    })
    
    return input[0];
};

// Do not edit below this line
module.exports = findTheOldest;
