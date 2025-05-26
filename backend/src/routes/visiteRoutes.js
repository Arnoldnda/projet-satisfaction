const express = require('express')
const router = express.Router() 
const visiteController = require('../controllers/visiteController')

router.post('/api/visite', visiteController.createVisite)
router.get('/api/visites', visiteController.getAllVisite)
router.get('/api/visite/:id', visiteController.getViiteById)

module.exports = router