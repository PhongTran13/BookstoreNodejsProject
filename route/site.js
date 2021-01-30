//user controller
const product = require('../controller/product');
const user = require('../controller/user')

const { render } = require('ejs');
const express = require('express');
const router = express.Router();
//define route
router.get('/views/shop', product.getAll)
module.exports = router;
router.get('/checkout', user.login)

router.post('/checkout', user.register);
router.post('/checkout', user.login1);