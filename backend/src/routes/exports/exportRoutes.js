const express = require('express')
const router = express.Router() 
const auth = require('../../auth/auth')
const exportControllers = require('../../controllers/exports/exportControllers') 

// exports 
router.get('/api/visites/exports/cvs', auth, exportControllers.exportVisitesCSV )
router.get('/api/visites/exports/excel', auth, exportControllers.exportVisitesExcel)

module.exports = router