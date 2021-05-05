const express = require('express')
const router = express.Router()
const formController = require('../Controller/formController')
const requiredLogin = require('../middleware/requiredLogin')


router.post('/signup',formController().signup)
router.post('/signIn',formController().signIn)













module.exports = router