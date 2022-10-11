const express = require('express')
const app = express()

port = 1337
hostName = '127.0.0.1'

// By Default the browers runs on get method, so if we run on browser, 
// cannot get/ login 
// SO to test the server, we use postman 
app.post('/login', (req, res) => {
    res.send('Login success')
})

app.delete('/email', (req, res) => {
    res.send('Deleted Sucessfully')
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})