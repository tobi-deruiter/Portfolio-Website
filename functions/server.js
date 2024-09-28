const   express = require('express'),
        { onRequest } = require("firebase-functions/v2/https"),
        cors = require('cors')({origin: true})

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }))
app.use(cors);

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/users'))
app.use('/about', require('./routes/about'))
app.use('/experience', require('./routes/experience'))
app.use('/projects', require('./routes/projects'))
app.use('/contact', require('./routes/contact'))

exports.app = onRequest(app)
exports.devApp = app