const express = require('express')

const {
    getUser,
    newUser
} = require ('../controller/userController.js')

const router = express.Router()

router.post('/SignUp', newUser)

router.get('/:email/:password', getUser)

module.exports = router