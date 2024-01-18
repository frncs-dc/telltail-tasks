const Task = require('../models/TaskModel')
const mongoose = require('mongoose')

// get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
}

const filterTasks = async (req, res) => {
    const {filterType, filterStatus} = req.params
    let filteredTasks = [];

    if (filterType === "None" && filterStatus === "None"){
        filteredTasks = await Task.find()
    }
    if (filterType === "None" && filterStatus !== "None"){
        filteredTasks = await Task.find({status: filterStatus})
    }
    if (filterStatus === "None" && filterType !== "None"){
        filteredTasks = await Task.find({type: filterType})
    }
    if (filterStatus !== "None" && filterType !== "None"){
        filteredTasks = await Task.find({status: filterStatus, type: filterType})
    }

    res.status(200).json(filteredTasks)

}

// add task
// #TODO:INCORPORATE NEW PET HERE IN TASK
const newTask = async (req, res) => {
    const {title, deadline, type, notes} = req.body

    try{
        const task = await Task.create({title, deadline, type, notes})
        res.status(200).json(task)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}
// complete task
const completeTask = async (req, res) => {
    const { taskID } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskID)) {
        return res.status(400).json({ error: 'No such task' });
    }

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: taskID },
            { status: req.body.status },
            { new: true }
        ).exec();

        if (!updatedTask) {
            return res.status(400).json({ error: 'No such task' });
        }
        console.log("Task:" + updatedTask)
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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
    deleteTask,
    filterTasks
}