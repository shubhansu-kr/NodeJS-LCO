// temp is coming from some API 

let temp 

// Operations on temp
temp = temp * 9/5 + 32 ;

// lets say the program failed to fetch data from api or due to any error
// the data was not recieved properly and temp remained undefined. 

// undefined != 0 != null 
console.log(temp);   // undefined 

// Boolean - True or False 
let grade = true;
console.log(grade);

let totalMarks = 43;
let isPassed = (totalMarks > 33);
console.log(isPassed);   // true