const express = require('express');
const router = express.Router();
const customer_controller = require('../controllers/customer.controller');

router.post('/create', customer_controller.customer_create);
router.post('/getdata', customer_controller.customer_details);
router.post('/delete', customer_controller.customer_delete);
router.post('/getalldata', customer_controller.all_customers);
router.post('/update', customer_controller.update);

module.exports = router;