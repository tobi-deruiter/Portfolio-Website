const   express = require('express'),
        tools = require('../public/tools/tools')
const router = express.Router()

router.get('/', (req, res, next) => {
    tools.render(req, res, next, 'home', 'Tobi DeRuiter Portfolio', 'home')
})

module.exports = router