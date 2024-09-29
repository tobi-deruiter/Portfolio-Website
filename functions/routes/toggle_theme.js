const   express = require('express'),
        tools = require('../public/tools/tools')
const router = express.Router()

router.get('/:theme_type', (req, res, next) => {
    theme = req.params.theme_type
    if (theme == 'light') {
        theme = 'dark'
    } else {
        theme = 'light'
    }
    tools.setCookies(req, res, next, `${theme}`)
    res.redirect(req.get("Referrer") || "/")
})

module.exports = router