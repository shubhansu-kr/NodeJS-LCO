const express = require('express')
const app = express()

port = 1337
hostName = '127.0.0.1'

app.get('/', (req, res)=>{
    res.send('Big Stack')    
})

app.listen(port, hostName, ()=>{
    console.log(`Server is listening at http://${hostName}:${port}`)
})