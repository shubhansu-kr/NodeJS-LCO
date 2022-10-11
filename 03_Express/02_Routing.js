// Routing in Express 

const express = require('express')
const app = express()

port = 1337
hostName = '127.0.0.1'

// Always add a little description for each route 
app.get('/', (req, res)=>{
    res.send('Home Page')    
})

// Type: Get
// Access: Public
// @Description for the route 
app.get('/about-us', (req, res)=>{
    res.send('This is all about us')    
})

app.post('/login', (req, res)=>{
    res.send('Login successfull')    
})

// We can use regex in path route 
// * -> Replace * with any string possibly empty and the regex will match the 
// pattern. eg- abcd, abdsiskjhgfakcd, absdfcd
app.get('ab*cd', (req, res)=>{
    res.send('Response send for any get req starting with ab and ending with cd')
})

// Sometimes we get parameters with get req also 
// like: user/:id
// here id is the parameter and can contain any key value 

app.get('/user/:id', (req, res)=>{
    res.send(req.params)    
    // params gives us the requested parameter in json format 
    // here we might get something like 
    // {"id": "121"}
    // Keys and values are in String type
})


app.get('/flights/:from-:to', (req, res)=>{
    res.send(req.params)    
    // : -> Refers to user input 
    // No. of objects in the Json == no. of user input 
    // {"from":":Jalandhar","to":":Karachi"}
})

app.listen(port, hostName, ()=>{
    console.log(`Server is listening at http://${hostName}:${port}`)
})