const express = require('express')

const router = express.Router()

const { registerBdeFormData, fetchStudentData } = require('../controllers/bdeController')

router.post('/studentRegistry', registerBdeFormData)

router.get('/fetchStudentData', fetchStudentData)

module.exports = router