const express = require('express')

const {
    getTasks,
    newTask,
    test
} = require ('../controller/taskController.js')

const router = express.Router()

router.get('/Home', getTasks)

router.get('/', test)

router.post('/Home', newTask)

module.exports = router