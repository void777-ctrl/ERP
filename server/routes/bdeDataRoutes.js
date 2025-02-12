const express = require('express')

const router = express.Router()

const { registerBdeFormData } = require('../controllers/bdeController')

router.post('/studentRegistry', registerBdeFormData)

module.exports = router