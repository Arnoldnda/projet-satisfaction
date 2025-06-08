const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginControllers')

router.post('/api/login', loginController.loginAdmin)

module.exports = router 