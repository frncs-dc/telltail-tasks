const express = require('express')

const {
    getTasks,
    newTask
} = require ('../controller/taskController.js')

const router = express.Router()

router.get('/Home', getTasks)

router.post('/Home', newTask)

module.exports = router