const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    task:{
        type: String,
        required: true
    },
    dateAcquired:{
        type: Date,
        required: true
    },
    trait:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    affection:{
        type: Number,
        required: true
    },
    hunger:{
        type: Number,
        required: true
    },
    medals:{
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Pet', petSchema)