const express = require('express')
const path = require('path')
const app = express()

const hostName = '127.0.0.1'
// If there is any port in env, use it other wise take the default 1337
// value. 
const port = process.env.PORT || 1337

// views is the default folder for all the templating 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    // res.send('Hello Developers ')
    // Now, we need to render the pug file, since we have already set the 
    // views path previously, it will automatically fetch the file and 
    // serve it to the user 
    res.render('index')
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})