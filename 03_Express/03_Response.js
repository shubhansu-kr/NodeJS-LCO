// Responses And Status Codes 

const express = require('express')
const app = express()

port = 1337
hostName = '127.0.0.1'

// Frequently used response methods 
// 1. res.send(): Send data 
// 2. res.download(): Directly prompt a download window 
// 3. res.end(): 
// 4. res.redirect(): Used to redirect user to a specific route 
// 5. res.status(): Send response status code 
// 6. res.render(): Render ejx components 
// 7. res.json(): Send Json file 


// Status Codes 
// 1. 200: Status OK 
// 2. 404: Not Found 
// 3. 403: Auth Err/ Forbidden 
// 4. 500: Internal Server Error

app.get('/', (req, res)=>{
    res.status(201).send('Home Page')    
})

app.get('/about-us', (req, res)=>{
    // We can also send the json object to transfer data 
    res.json({'name': 'shyam', 'id':'21', 'bal': '21111'})  
})

app.listen(port, hostName, ()=>{
    console.log(`Server is listening at http://${hostName}:${port}`)
})