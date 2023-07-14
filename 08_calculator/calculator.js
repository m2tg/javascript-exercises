const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	
  let arrsum = 0;

  arr.forEach(element => {
    arrsum += element;
  });

  return arrsum;
};

const multiply = function(a,...args) {
  
  args.forEach(element => {
    a *= element;
  });

  return a;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
	
  let fact = 1;

  for (let i = 1; i<=num; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
