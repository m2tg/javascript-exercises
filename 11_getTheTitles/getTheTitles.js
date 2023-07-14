const getTheTitles = function(input) {
    bookTitles = [];

    bookTitles = input.map(element => element.title);

    return bookTitles;
    
};

// Do not edit below this line
module.exports = getTheTitles;
