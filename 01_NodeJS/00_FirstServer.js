const http = require('http')

const hostName = '127.0.0.1'
const port = 1337

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello Wordld!')
})

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`)
})