const express = require('express')

const {
    getTasks,
    newTask,
    completeTask
} = require ('../controller/taskController.js')

const router = express.Router()

router.get('/Home', getTasks)

router.post('/Home', newTask)

router.patch('/Home/:id', completeTask)

module.exports = router