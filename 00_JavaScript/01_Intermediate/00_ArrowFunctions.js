// Arrow Function

// Basic syntax: 
const greet = (name) => {
    return `Hello ${name}`
}
console.log(greet('Shubhansu-kr'))

// Arrow function also works without block and return 
const greet1 = (name) => `Hello ${name}!`

// create a todo 
const todos = [
    {
        title: 'First',
        isDone: true
    },
    {
        title: 'Second',
        isDone: false
    },
    {
        title: 'Third',
        isDone: true
    },
    {
        title: 'Fourth',
        isDone: false
    },
    {
        title: 'Fifth',
        isDone: false
    },
    {
        title: 'Sixth',
        isDone: true
    }
]

// Return the todos which are done 

// filter method is used to filter the elements of the list 
// and expects a call back function which specifies which element to filter
// whenever the call back fn return true the item is selected otherwise 
// filtered

// basic function
const doneT = todos.filter(function(item){
    return item.isDone == true;
})

// arrow function
const doneT1 = todos.filter((item)=>{
    // we use curly braces when we have to return something
    return item.isDone == true;
})

// We can use parenthesis without return keyword    
const doneTodos = todos.filter((item)=>(item.isDone == true))
console.log(doneTodos)

// Assignement: Create a todolist with 6 objects and filter out all the 
// incomplete todos and print only the title 

const pendingTodods = todos.filter((item)=> !item.isDone)

pendingTodods.forEach((item)=>(console.log(item.title)));