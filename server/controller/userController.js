const User = require('../models/UserModel')
const mongoose = require('mongoose')

// gets the user based on login credentials
const getUser = async (req, res) => {
    const {email, password} = req.params
    console.log(email, password)
    const user = await User.findOne({email: email, password: password})
    console.log("User", user)
    if (user){
        res.status(200).json(user)
    }
    else{
        res.status(401).json({ error: 'Invalid credentials' });
    }
}


const newUser = async (req, res) => {
    const {username, email, password, character} = req.body

    try{
        const user = await User.create({username, email, password, character})
        console.log(user)
        res.status(200).json(user)

    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getUser,
    newUser
}