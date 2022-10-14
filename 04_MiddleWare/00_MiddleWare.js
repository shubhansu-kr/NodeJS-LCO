const express = require("express")
const app = express()

const hostName = '127.0.0.1'
const port = 1337

// MiddleWares are libraries/codes written beforehand to be used in the 
// programs. eg. express 

const myMiddleWare = (req, res, next) => {
    console.log('I am a middleware')

    // The middleware just grabs the control from the app, so to return the 
    // control and mark the end of middleware, we use next(), which simply
    // returns the control back to the app
    next()
}

// app.use is used to use the middlewares, the middlewares are executed before the app
app.use(myMiddleWare);

// middlewares have the access to the req and res of the event
// when the request was made from the user/client, the control went to the 
// middle ware first and then jumped to the app 
const serverTime = (req, res, next) => {
    console.log('ServerTime Middleware')
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    req.requestTime = today.toDateString();
    next();
}

// The middle wares are used in the sequence they are defined 
app.use(serverTime)

app.get('/', (req, res) => {
    // Control jumps to middle wares

    // Control returns back to app 
    console.log('Flag1')

    res.status(200).send('Hello' + ' The time is: ' + req.requestTime)
    console.log('Inside app');
})

app.listen(port, hostName, () => {
    console.log(`Server is listening at http://${hostName}:${port}`)
})