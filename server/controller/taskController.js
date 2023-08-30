const Task = require('../models/TaskModel')
const mongoose = require('mongoose')

// testing the server
const test = async(req, res) => {
    res.json('Server is working!')
}

// get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}
// add task
// #TODO:INCORPORATE NEW PET HERE IN TASK
const newTask = async (req, res) => {
    const {title, deadline, duetime, type} = req.body

    try{
        const task = await Task.create({title, deadline, duetime, type})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}
// complete task

// delete task

// task overdue

module.exports = {
    getTasks,
    newTask,
    test
}