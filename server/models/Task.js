const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema({
    title:{
        type: String,
        required: true
    },
    deadline:{
        type: Date,
        required: true
    },
    type:{
        type: String,
        enum: ['Work', 'Personal', 'Errands']
    },
    status:{
        type: String,
        enum: ['In Progress', 'Done'],
        default: 'In Progress'
    }
})

module.exports = mongoose.model('Task', Task)