const express = require('express')
const router = express.Router()
const productController = require('../Controller/productController')
const requiredLogin = require('../middleware/requiredLogin')


router.get('/Dashboard',productController().dashboard)
router.post('/AddProduct',requiredLogin,productController().AddProduct)
// router.post('/EditProduct',productController().EditProduct)
// router.post('/DeleteProduct',productController().DeleteProduct)





module.exports = router