const express = require('express')
const router = express.Router()
const productController = require('../Controller/productController')
const requiredLogin = require('../middleware/requiredLogin')


router.get('/Dashboard',requiredLogin,productController().dashboard)
router.post('/AddProduct',requiredLogin,productController().AddProduct)
// router.post('/EditProduct',productController().EditProduct)
// router.post('/DeleteProduct',productController().DeleteProduct)
router.get('/limited',requiredLogin,productController().limit)
router.post('/Search',productController().Search)





module.exports = router