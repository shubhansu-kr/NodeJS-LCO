// Array: DataStructure 

const superHeroes = ['IronFist', 'Flash', 'SpiderMan']

// We can have multiple data type var in single array
const arr = ['string', 21]

console.log(superHeroes)
console.log(arr)

// Indexing: Array Paradigm
console.log(superHeroes[0], superHeroes[1])

// Length of an array: .length method is used to find out the length of the array 
console.log(superHeroes.length)

// Print last element of arr
console.log(superHeroes[superHeroes.length - 1])

// Template Literals: Backtick used to format string 
console.log(`We have ${superHeroes.length} superHeroes in the matrix`)

// Array Methods in JS 
const array = ['one', 'two', 'three', 'four', 'five']

// start 
// Pop the first element: We shift the array left: It returns the first element 
let x = array.shift()
console.log(array)
console.log(x)
// push an element at the beginning of the array 
array.unshift(x)
console.log(array) 

// end 
// Pop the last element of the array 
x = array.pop()
console.log(arr)
console.log(x)
// Push an element at the end of the array 
array.push(x)
console.log(array)


// middle 
// splice: array.splice(start pos, len to be deleted , insert element)
array.splice(3, 2, 'dont know why')
console.log(array)