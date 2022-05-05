
 const express = require('express');
 const{body}=require('express-validator')
 
 const { getAnAmount} = require('../controllers/tranfers.controller');
 
 const router = express.Router();
 
 
 router.post('/',getAnAmount);
 
 module.exports = { TransferRouter: router };