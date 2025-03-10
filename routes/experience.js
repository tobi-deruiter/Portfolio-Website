const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res, next) => {
    tools.render(req, res, next, 'experience', 'My Experience', 'experience')
})

module.exports = router