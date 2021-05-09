const express = require('express')
const router = express.Router()
const productController = require('../Controller/productController')
const requiredLogin = require('../middleware/requiredLogin')


router.get('/Dashboard',requiredLogin,productController().dashboard)
router.post('/AddProduct',requiredLogin,productController().AddProduct)
router.post('/updateProduct/:id',requiredLogin,productController().updateProduct)
router.post('/DeleteProduct/:id',productController().DeleteProduct)
router.get('/limited',requiredLogin,productController().limit)
router.post('/Search',productController().Search)
router.get('/EditProduct/:id',productController().editProduct)
router.post('/filterProduct/',productController().filterProduct)


module.exports = router