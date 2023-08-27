require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('Listening on Port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })