const express = require('express');
const Product = require('../models/product.model.js');
const router=express.Router();
const {getProducts} = require('../controllers/product.controller.js');


router.get('/',getProducts);
router.get('/:id',getProducts);