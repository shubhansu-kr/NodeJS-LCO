const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri']

// For each: Pass a function to operate each element 
days.forEach(() => console.log(`Working day`))

// day is the indivisual element in the iterable element 
days.forEach((day) => console.log(`${day}`))

// second parameter is index 
days.forEach((day, ind) => console.log(`${ind + 1}. ${day}`))

// First parameter: Element of the array, 
// Second paramter: Index of the element 

// Assignment: Create list of months and iterate using for each 
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
months.forEach((mon) => console.log(mon))

// Assignment: Create a todo list 
const todoList = ['DailyChallenge', 'ScalerDIscord', 'DsaContest', 'HackerRankPython']
todoList.forEach((todo, ind)=>console.log(`${ind+1}. ${todo}`))

// For loops in JS
for (let index = 0; index < months.length; index++) {
    const element = months[index];
    console.log(element)
}

// while loops in JS 
var i = 0
while (i < months.length) {
    console.log(months[i])
    i++
}

// dowhile in JS 
i = 0
do {
    console.log(months[i])
    ++i
} while (i < months.length);

