const express = require('express');
const app = express();
const db_connect = require('./db_connect')
const register = require('./register')
const login = require('./login')
const session = require('express-session')
const parser = require('cookie-parser');
const upload = require('./upload_vid')
const watch = require('./watch')
const cors = require('cors')

const stream = require('./stream_vid')
    //middleware

app.use(cors({ credentials: true, origin: 'http://10.61.74.57:5500' }))
    // here after include frontend origin instead of localhost 
    // and 127.0.0.1  is different from localhost
    .use(express.json())
app.use(parser())

db_connect('vidly')
app.use(session({
    key: "uid",
    secret: "0xC345$%^&ewfwfwaae#$%^&*SDFGHJKNBVCFDRGTHJM",
    resave: false,
    saveUninitialized: true,


}))



//    these are not middleware these are routes which are to be handled by router
app.use('/register', register)
app.use('/login', login)
app.use('/upload', upload)
app.use('/watch', watch)
app.use('/stream', stream)


//     requests 
app.get('/', (rq, rs) => rs.send("HomePage"))
app.get('/logout', (r, rs) => {
    r.session.destroy()
    rs.redirect("http://10.61.74.57:5500/login.html")
})





app.listen("3000", () => console.log("Server started on port 3000"))