const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceControllers')

router.get('/api/services', serviceController.getAllService)

module.exports = router 