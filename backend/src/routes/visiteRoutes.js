const express = require('express')
const router = express.Router() 
const auth = require('../auth/auth')
const visiteController = require('../controllers/visiteController')
const { exportVisitesCSV } = require('../controllers/exports/exportCSV')

router.post('/api/visite', visiteController.createVisite)
router.get('/api/visites', auth,  visiteController.getAllVisite)
router.get('/api/visite/:id', auth, visiteController.getViiteById)

// exports 
router.get('/api/visites/exports/cvs', auth, exportVisitesCSV )

module.exports = router