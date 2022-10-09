const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const { unescape } = require('querystring')

const mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'jpg': 'image/jpg'
}

const port = 1337
const hostName = '127.0.0.1'

const app = http.createServer((req, res) => {
    // var reqUrl = req.url()
    var reqUrl = url.parse(req.url).pathname
    
    // var fileName = path.join(process.cwd(), unescape(reqUrl))

    // Since we are running my servers in a dediacated folder App, 
    // we need to join the dir to the file name, in case of deployement
    // we need not to do this step, File system Basics

    var fileName = path.join(process.cwd(), 'App', unescape(reqUrl))

    console.log('File you are looking for:', fileName)

    var loadFile
    try {
        loadFile = fs.lstatSync(fileName)
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('Page Not Found')
        res.end()
        return 
    }


    if (loadFile.isFile()) {
        var mimeType = 
            mimeTypes[
                path
                    .extname(fileName)
                    .split('.')
                    .reverse()[0]
            ]
        res.writeHead(200, {'Content-Type': mimeType})
        var fileStream = fs.createReadStream(fileName)
        fileStream.pipe(res)
    }
    else if (loadFile.isDirectory()) {
        res.writeHead(302, {'Location': 'index.html'})
        // 302 - status code for directory
        res.end()
    }
    else {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.write('500: Internal Error')
        res.end()
    }
})

app.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}`)
})