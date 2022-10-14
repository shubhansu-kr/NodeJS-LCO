const express = require('express')
const bodyParser = require('body-parser')

const hostName = '127.0.0.1'
const port = 1337

// public folder is used to serve all the static files 
let app = express()

app.use(bodyParser.urlencoded({extended: false}))

// serve the static file to load 
app.use('/login', express.static(__dirname+'/public'))

app.get('/', (req, res)=>{
    res.status(200).send('Hello Developer <p><a href=\'/login\'>login<a/><p/>')
})

// Since form data is submitted using the post method, we have to serve
// any post req which comes from the login page. 
app.post('/login', (req, res)=>{
    // The req obj contains a lot of information about the request made by the user.
    console.log(req.body)
    
    // All the inputs from the form becomes the part of the req object
    // which can be then accessed using the name attribute of input field
    
    // eg. req.body.email
    console.log(req.body.email)

    // Once we recive the object we do the necessary database processing 
    // and then re dircet the user to the req. resource.
    res.redirect('/')
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})