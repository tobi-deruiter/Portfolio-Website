const   express = require('express'),
        tools = require('../public/tools/tools')
const router = express.Router()

router.get('/', (req, res, next) => {
    tools.render(req, res, next, 'contact', 'Contact Me', 'contact')
})

module.exports = router