const express = require('express');
const{body}=require('express-validator')

const {
  
  
  createUser,
  loginUser
  
} = require('../controllers/user.controller');


const router = express.Router();

// const { validateUser } = require('../midelwares/user.midelware');

router.post('/signup', createUser,

body('accountNumber').notEmpty().isLength({ min: 6 }))

router.post('/login',loginUser)


module.exports = { usersRouter: router };
