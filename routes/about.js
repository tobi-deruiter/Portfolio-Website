const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res, next) => {
    tools.render(req, res, next, 'about', 'About Me', 'about')
})

module.exports = router