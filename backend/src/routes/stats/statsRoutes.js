const express = require('express')
const router = express.Router() 
const auth = require('../../auth/auth')
const statsController = require('../../controllers/stats/statsControllers')

router.get('/api/stats/satisfaction', auth, statsController.getSatisfactionStats)
router.get('/api/stats/satisfaction-par-service', auth, statsController.getSatisfactionByService)
router.get('/api/stats/raison-visite', auth, statsController.getStatsByRaison)


module.exports = router