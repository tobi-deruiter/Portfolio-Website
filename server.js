const   express = require('express'),
        cors = require('cors')({origin: true}),
        cookie = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }))
app.use(cors);
app.use(cookie())

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/users'))
app.use('/about', require('./routes/about'))
app.use('/experience', require('./routes/experience'))
app.use('/projects', require('./routes/projects'))
app.use('/contact', require('./routes/contact'))
app.use('/toggle_theme', require('./routes/toggle_theme'))

const port = 3000;
app.listen(port, (error)=>{
    if (!error) {
        console.log("Server Running on Port " + port);
    } else {
        console.log("Error: " + error);
    }
})