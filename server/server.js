require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users')


const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/tasks', taskRoutes)
app.use('/api/', userRoutes)


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