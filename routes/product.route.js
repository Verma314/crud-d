const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);
router.post('/getdata', product_controller.product_details);
router.post('/delete', product_controller.product_delete);
router.post('/getalldata', product_controller.all_products);

module.exports = router;