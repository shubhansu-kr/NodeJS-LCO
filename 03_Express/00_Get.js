const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('<p><p>Welcome to the home page:</p><p><ul><li><a href=\'/services\'>services</a></li><li><a href=\'/contact\'>contact us</a></li><li><a href=\'/about\'>about us</a></li></ul></p></p>')
})

app.get('/about', (req, res) => {
    res.send('What do you want to know about us?')
})


// Assignment: Create a route for contact us and services 
app.get('/services', (req, res) => {
    res.send('<ul><li><a href=\"http://expressjs.com/en/4x/api.html#express\">Express</a></li><li><a href=\"https://nodejs.org/dist/latest-v16.x/docs/api/\">Node</a></li><li><a href=\"https://careers.linkedin.com\">Linkedin</a></li></ul>')
})

app.get('/contact', (req, res) => {
    res.send('<a href=\"https://www.linkedin.com/in/shubhansu-kr\">Linked IN</a>')
})

app.listen(1337, () => {
    console.log(`Server is running at http://localhost:1337`)
})