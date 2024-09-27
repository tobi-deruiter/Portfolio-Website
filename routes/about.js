const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'about', 'About Me', 'about.css')
})

module.exports = router