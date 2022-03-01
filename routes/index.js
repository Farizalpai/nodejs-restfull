import express from 'express'
import { getProducts,saveProducts, updateProducts, getProductById, deleteProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)

router.post('/', saveProducts)
router.patch('/:id', updateProducts)
router.delete('/:id', deleteProduct)

export default router