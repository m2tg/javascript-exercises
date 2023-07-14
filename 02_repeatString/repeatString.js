const repeatString = function(str, numberOfTimes) {
    
    let repeatedString = '';

    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    
    while(numberOfTimes > 0){
        repeatedString += str;
        numberOfTimes--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
