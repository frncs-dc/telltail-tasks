const express = require('express')

const {
    getTasks,
    newTask,
    completeTask,
    deleteTask,
    filterTasks
} = require ('../controller/taskController.js')

const router = express.Router()

router.get('/Home', getTasks)

router.get('/Home/:filterType/:filterStatus', filterTasks)

router.post('/Home', newTask)

router.put('/Home/:taskID', completeTask)

router.delete('/Home/:taskID', deleteTask)

module.exports = router