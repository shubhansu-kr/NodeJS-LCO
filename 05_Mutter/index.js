const express = require('express')
const multer = require('multer')
const path = require('path')
const ejs = require('ejs')

const app = express()

const hostName = '127.0.0.1'
const port = process.env.PORT || 1337

// multer setting 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/myUpload')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ 
    storage: storage
}).single('myImage')


// We need to set ejs engine 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    // res.send('Aloha A')
    res.render('index')
})

// configure the route for post method 
// Method: 
// Description 
app.post('/upload', (req, res)=>{
    upload(req, res, (err)=>{
        if (err) {
            res.render('index', {
                message: err
            })
        }
        else {
            res.render('index', {
                message: 'Successfully Uploaded',
                filename: `myUpload/${req.file.filename}`
            })
        }
    })
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})