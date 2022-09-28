const myTodos = []

myTodos.push('DSA contest')
myTodos.push('Python Contest')
myTodos.push('Scaler')
myTodos.push('Node')
myTodos.push('Gym')
myTodos.push('Dinner')

myTodos.forEach((todo, num) => (
    console.log(`Your ${num + 1} task is ${todo}`)
))

// Assignment: Add todos to the top and iterate using for loop 

// Different ways to clear an array in js 
// myTodos.length = 0 
// myTodos = []
// while(myTodos.length){
//     myTodos.pop()
// }

myTodos.length = 0

// Add task from the top
myTodos.unshift('DSA contest')
myTodos.unshift('Python Contest')
myTodos.unshift('Scaler')
myTodos.unshift('Node')
myTodos.unshift('Gym')

// use for loop 
for (let index = 0; index < myTodos.length; index++) {
    const todo = myTodos[index];
    console.log(`Your ${index + 1} task is ${todo}`)
}