const express = require('express')
const path = require('path')
const app = express()

const hostName = '127.0.0.1'
const port = process.env.PORT || 1337

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})