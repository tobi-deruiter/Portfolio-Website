const   express = require('express'),
        { onRequest } = require("firebase-functions/v2/https"),
        cors = require('cors')({origin: true})

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.urlencoded({ extended: true }))
app.use(cors);

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     // res.json({ message: 'Error' })
//     // res.send()
//     // res.download()
//     // res.status().send()
//     // res.sendStatus()
//     tools.render(res, 'home', 'tobi-deruiter.info', 'home.css')
//     // To send data to render html: res.render('page', { var: "value" })
//     // to get data in ejs file: <%= locals.var %>
//     //      add default to data in case its not set: <%= locals.var || 'Default' %>
// })

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/users'))
app.use('/about', require('./routes/about'))
app.use('/experience', require('./routes/experience'))
app.use('/projects', require('./routes/projects'))
app.use('/contact', require('./routes/contact'))

// app.listen(3000)

exports.app = onRequest(app)
exports.devApp = app