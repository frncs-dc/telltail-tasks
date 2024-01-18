const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    // user:{
    //     type: String,
    //     required: true
    // },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    character:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema)