// Functions in JS 

function greet () {
    console.log('Hello')
}
greet()

function greet1(name) {
    console.log(`Hello ${name}, How are you`)
}
greet1('Shubhansu-kr')

let greet2 = function (name) {
    console.log(`Hello ${name}, How are you`)
}
greet2('Shubhansu-kr')

let greet3 = (firstName, lastName)=>{
    console.log(`Hello ${firstName} ${lastName}`)
}
greet3('Shubhansu', 'Kumar')

let adder = (a, b)=>{
    return a+b
}

sum = adder(3, 5)
console.log(sum)

// Default Parameters in function 
let product = (a, b = 9) => {
    return a * b
}

console.log(product(4, 3))
console.log(product(9))