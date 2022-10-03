let myTodos = ['Buy Banana', 'Go to College', 'Mark Attendance', 'Come Back', 'DO DSA']


// Return the index of element, -1 if element is not present 
console.log(myTodos.indexOf('Go to College'))

// Array of objects 
const newArr = [{
    title: 'First',
    isDone: true
}, {
    title: 'Second',
    isDone: false
}, {
    title: 'Third',
    isDone: false
}]

// findIndex takes a function as parameter: Returns index when call back return true;

const index = newArr.findIndex(function (x, ind) {
    return x.title === 'Second'
})

const findFirstIndex = function (newArr, title) {
    const index = newArr.findIndex((x, ind) => {
        return x.title.toLowerCase() === title.toLowerCase()
    })
    return index
    // or we can return the object 
    // return newArr[index]
}

let printMe = findFirstIndex(newArr, 'First')

console.log(printMe)