const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    // user:{
    //     type: String,
    //     required: true
    // },
    title:{
        type: String,
        required: true
    },
    deadline:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['Work', 'Personal', 'Errands', 'Misc']
    },
    status:{
        type: String,
        enum: ['In Progress', 'Done'],
        default: 'In Progress'
    },
    notes:{
        type: String
    }
})

module.exports = mongoose.model('Task', taskSchema)