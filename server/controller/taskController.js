const Task = require('../models/Task')
const mongoose = require('mongoose')

// get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}
// add task
// #TODO:INCORPORATE NEW PET HERE IN TASK
const newTask = async (req, res) => {
    const {title, deadline, type} = req.body

    try{
        const task = await Task.create({title, deadline, type})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}
// complete task

// delete task

// task overdue

