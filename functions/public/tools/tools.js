const   express = require('express')

exports.render = function (res, file, title, name) {
    json = {
        title: title,
        name: `${name}`
    }
    res.render(file, json)
}