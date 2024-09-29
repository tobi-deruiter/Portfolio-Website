exports.setCookies = function (req, res, next, type) {
    res.cookie("theme", type)
    next()
}

exports.render = function (req, res, next, file, title, name) {
    theme = req.cookies.theme
    not_theme = undefined
    if (theme == undefined) {
        theme = 'light'
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