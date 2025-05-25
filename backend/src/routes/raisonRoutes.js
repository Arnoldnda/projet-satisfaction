const express = require('express')
const router = express.Router() 
const rasionController = require('../controllers/raisonControllers')

router.get('/api/raisons', rasionController.getAllRaison)

module.exports = router