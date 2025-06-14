const express = require('express')
const router = express.Router() 
const auth = require('../../auth/auth')
const statsController = require('../../controllers/stats/statsControllers')

router.get('/api/stats/satisfaction', auth, statsController.getSatisfactionStats)

module.exports = router