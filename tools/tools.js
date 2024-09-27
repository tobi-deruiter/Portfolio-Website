const   express = require('express')

exports.render = function (res, file, title, style) {
    res.render(file, { title: title, style: "stylesheets/"+style })
}