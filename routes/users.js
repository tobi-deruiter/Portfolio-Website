const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/new', (req, res) => {
    res.send('New User Form')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID: ${req.params.id}`)
    }).delete((req, res) => {
        res.send(`Delete User with ID: ${req.params.id}`)
    })

const users = [{ name: "Heck" }, { name: "Oh Boy" }]
router.param('id', (req, res, next, id) => {
    req.user = users[id%users.length]
    next()
})

module.exports = router