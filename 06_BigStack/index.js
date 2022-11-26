const express = require('express')

const app = express()

const port = process.env || 1337
const hostName = '121.0.0.1'

app.get('/', (req, res)=>{
    res.write('BigStack Project')
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})