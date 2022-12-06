const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth')

const {
    getAllProducts,
    getOneProduct,
    postProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/products');

router.route('/').get(getAllProducts).post(postProduct);
router.route('/:id').get(getOneProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;