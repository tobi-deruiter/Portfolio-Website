const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'contact', 'Contact Me', 'contact.css')
})

module.exports = router