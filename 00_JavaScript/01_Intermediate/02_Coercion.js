// Coercion : JS Predictions 

// Addition is predicted as concationation and thus printed 55
console.log('5' + 5); // 55

// order does not matter 
console.log(5 + '5'); // 55

// difference can only be done on int(s), so JS predicts it to be int
console.log('5' - 5); // 0

// true: 1, false: 0
console.log(true + true) // 2

// Falsy values: 
false
0
''
undefined
null

// Any value other than these 5 will be considered true 

// Never let JS predict anything
// Always check the data type of the operator 
console.log(typeof(5));
console.log(typeof('t'));
