const   express = require('express'),
        tools = require('../public/tools/tools')
const router = express.Router()

router.get('/', (req, res) => {
    tools.render(res, 'experience', 'My Experience', 'experience.css')
})

module.exports = router