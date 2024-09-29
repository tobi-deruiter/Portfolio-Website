const {
    log,
    info,
    debug,
    warn,
    error,
    write,
  } = require("firebase-functions/logger");

exports.setCookies = function (req, res, next, type) {
    res.cookie("__session", type)
    next()
}

exports.render = function (req, res, next, file, title, name) {
    theme = req.cookies.__session
    not_theme = undefined
    if (theme == undefined) {
        theme = 'dark'
    }
    if (theme == 'light') {
        not_theme = 'dark'
    } else {
        not_theme = 'light'
    }
    json = {
        title: title,
        name: `${name}`,
        theme: theme,
        not_theme: not_theme
    }
    res.render(file, json)
}