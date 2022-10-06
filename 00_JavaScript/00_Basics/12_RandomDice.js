// Creating a random number in JS 

let numOne = 22
let numTwo = 7

// logs pie upto 15 decimal digits 
console.log(22/7) 

// toFixed(N) : Used to format off the digits upto N decimal places and return the 
// result in string format 
console.log((22/7).toFixed(2))

x = (22/7).toFixed(2)
console.log(x, typeof(x))
// Intrestingly toFixed function returns a string instead of number 

// floor is used to calculate the floor val of numeber 
console.log(Math.floor(x))

// Random Number Generator 
// Maths.Random() return a random number between 0 and 1;

dice = ()=>{
    console.log(1 + (Math.ceil(Math.random()*10))%6)
}

// TO get the random number between a specified range we use mod 
// Let's say range is [a, b]
// so the logic is randomNum = a + (Math.random()%(b-a+1));
setInterval(dice, 1000);