const   express = require('express'),
        tools = require('../tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'projects', 'My Projects', 'projects.css')
})

module.exports = router