const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.get('/', product_controller.root);
router.post('/create', product_controller.product_create);
router.post('/getdata', product_controller.product_details);
router.post('/delete', product_controller.product_delete);
router.post('/getalldata', product_controller.all_products);

module.exports = router;