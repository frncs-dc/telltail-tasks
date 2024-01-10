const Pet = require('../models/PetModel')
const mongoose = require('mongoose')

const getPets = async (req, res) => {
    const pets = await Pet.find()
    res.status(200).json(pets)
}

module.exports = { getPets }