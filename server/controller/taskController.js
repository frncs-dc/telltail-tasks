const Task = require('../models/TaskModel')
const mongoose = require('mongoose')

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
const completeTask = async (req, res) => {
    const { taskID } = req.params

    if(!mongoose.Types.ObjectId.isValid(taskID)){
        return res.status(400).json({error: 'No such task'})
    }

    const task = await Task.findOneAndUpdate({_id: taskID}, {
    ...req.body
    })

    if (!task) {
    return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}
// delete task
const deleteTask = async (req, res) => {
    const { taskID } = req.params

    if(!mongoose.Types.ObjectId.isValid(taskID)){
        console.log('Not valid id')
        return res.status(400).json({error: 'No such task'})
    }

    const task = await Task.findOneAndDelete({_id: taskID})

    if (!task) {
        console.log('Auq nga')
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}
// task overdue

module.exports = {
    getTasks,
    newTask,
    completeTask,
    deleteTask
}