const express = require('express')
const { getPets } = require('../controller/petController.js')

const router = express.Router()

router.get('/PetSystem', getPets)

module.exports = router