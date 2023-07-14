const fibonacci = function(num) {

    num = parseInt(num);

    if (num<0) {
        return 'OOPS';
    }
    let first = 1
      , next = 1;

    for ( let i = 3; i <= num; i++) {
        next = first + next;
        first = next - first;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
