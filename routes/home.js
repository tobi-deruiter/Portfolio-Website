const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'home', 'Tobi DeRuiter Portfolio', 'home.css')
})

module.exports = router