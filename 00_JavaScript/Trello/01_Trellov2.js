// Trello V2 

let todos = {
    day: 'Mon',
    meetings: 0,
    meetDone: 0
}

let addMeeting = (obj, meet = 0) => {
    obj.meetings += meet
    console.log(`Meetings: ${obj.meetings}`)
}

// We are passing obj by refrence here 
let completeMeeting = (obj) => {
    obj.meetDone++
    obj.meetings--
    console.log(`Meetings: ${obj.meetings}, MeetingsDone: ${obj.meetDone}`)
}

addMeeting(todos, 5)
completeMeeting(todos)
