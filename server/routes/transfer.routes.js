
 const express = require('express');
 
 
 const { transferences} = require('../controllers/tranfers.controller');
 
 const router = express.Router();
 
 
 //router.post('/',getAnAmount);
  router.post('/',transferences)
 
 module.exports = { TransferRouter: router };