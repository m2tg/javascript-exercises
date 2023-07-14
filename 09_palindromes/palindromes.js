const palindromes = function (input) {
    
    let cleanStr = input.toLowerCase();
    cleanStr = cleanStr.replaceAll(/[^a-z0-9]/g,"");
    //console.log(cleanStr);

    let reversedString = '';

    for (let i = cleanStr.length; i >= 0; i--) {
        
        reversedString += cleanStr.charAt(i);
    }
    console.log(reversedString);
    
    return cleanStr == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
