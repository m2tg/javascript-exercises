const sumAll = function( start, end) {
    
    if ((start < 0) || (end < 0) ) {
        return 'ERROR';
    }

    if ( !(Number.isInteger(start)) || !((Number.isInteger(end)))) {
        return 'ERROR'
    }

    if(start > end) {
        start = start + end;
        end = start - end;
        start = start - end;
    }
    console.log(start);
    
    let sum = 0;

    while ( start <= end) {
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
