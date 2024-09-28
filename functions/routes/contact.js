const   express = require('express'),
        tools = require('../public/tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'contact', 'Contact Me', 'contact')
})

module.exports = router