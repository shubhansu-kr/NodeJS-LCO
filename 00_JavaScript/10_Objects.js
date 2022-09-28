// Objects in JS 

// Objects are key value pair for real life entity 

let ytVideo = {
    title: 'LearnNodeJs', 
    duration: 213, 
    description: 'Learn Node Js in one video'
}

// We can access the data using the dot operator 
console.log(ytVideo.title)
console.log(ytVideo.duration)
console.log(ytVideo.description)

console.log(ytVideo)
console.table(ytVideo)

// We can also update the value of object 
ytVideo.description = 'Visit learn code online for more awesome tutorials'

console.table(ytVideo)

// Objects are fetched using API and then used in our application as data. 

// Assignment: Create an object for a new course 

let course = {
    title: 'Complete Backend with nodeJS', 
    tech: ['Node JS', 'MongoDB'],
    price: 399,
    duration: 6,
    certification: true
}

console.table(course)

let changePrice = (myObject) => {
    return (`Price of ${myObject.title} is ${myObject.price + 99}`)
}

// return object 
let f1 = () => {
    return {
        k1: 'val1',
        k2: 'val1',
        k3: 'val1'
    }
}

obj1 = f1()
console.table(obj1)

