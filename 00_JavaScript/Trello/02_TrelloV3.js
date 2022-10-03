// Trello V2 

let todos = {
    day: 'Mon',
    meetings: 0,
    meetDone: 0, 
    
    addMeeting: function(meet = 0){
        this.meetings += meet
        console.log(`Meetings: ${this.meetings}`)
        console.log(this)
        // console.log(todos)
    },

    completeMeeting : function(){
        if (this.meetings){
            this.meetDone++
            this.meetings--
            console.log(`Meetings: ${this.meetings}, MeetingsDone: ${this.meetDone}`)
        }
        else {
            console.log('No meetings lined up')
        }
    },

    reset: function(){
        console.log('All meetings reset')
        this.meetings = 0
        this.meetDone = 0
    }
}

// IF the function is inside the object, it's called a method 
todos.addMeeting(5)
todos.completeMeeting()

// Assignment: 
// Handle Meetings Done
// Reset the entire day meet

todos.completeMeeting()
todos.reset()

// Confusing Behavior: How does this works 
let app = {
    name: 'shubh',
    func: function(){
        // this is pointing to the obj 
        console.log(this) // logs obj
    }
}
let app1 = {
    name: 'shubh',
    func: ()=>{
        // Using arrow function: this is pointing to the window object
        console.log(this) // logs obj 
    }
}

app.func()
app1.func()

// Output:
// { name: 'shubh', func: [Function: func] }
// {}

// When we create an arrowFunction inside an object, this refers to the global 
// object and when we create a normal function inside the object it refers to 
// the object. 

// If we wish to refer the obj using the arrow function, we can use obj as an argument. 

let app3 = {
    name: 'shubh',
    func: ()=>{
        // Using arrow function: 
        console.log(app3.name) // logs shubh 
    }
}

app3.func()